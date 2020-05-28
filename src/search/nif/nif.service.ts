import axios from 'axios';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'

import { INif } from '../interfaces/nif.interface';
import { ScrapperResponse } from '../interfaces/scrapper.interface';
import { FindedEntityDTO, FontSource } from '../../database/dto/find-entity.dto';
import { CreateEntityDTO } from '../../database/dto/create-entity.dto';
import { EntityModel } from '../../database/model/entity.model';



@Injectable()
export class NifService {

    constructor(@InjectModel('entity') private EntityModel: Model<EntityModel>) {}

    async findNif(nif: String): Promise<FindedEntityDTO> {
        const localNif = await this.findLocal(nif)
        if (localNif) return { data: localNif, source: FontSource.local };

        const serverNif = await this.findByScrappingService(nif)
        if (serverNif.retorno.cod === 964) return { data: null, source: FontSource.mifin }

        const createNewRecord = await this.createNewEntityRecord({
          nif: serverNif.data.nif,
          name: serverNif.data.nome,
        });

        return { data: createNewRecord, source: FontSource.mifin };
    }

    findLocal(nif: String): Promise<INif> {
        return this.EntityModel.findOne({ nif }).exec();
    }

    async findByScrappingService(nif: String): Promise<ScrapperResponse> {
        const { data: entityData } = await axios.post(process.env.SCRAPPER_URL, { nif }, {
            headers: {
                ContentType: 'application/json'
            }
        })
        
        return entityData
    }

    createNewEntityRecord(CreateEntityDTO: CreateEntityDTO): Promise<INif> {
        return this.EntityModel.create(CreateEntityDTO);
    }
}
