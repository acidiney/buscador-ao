import axios from 'axios';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'

import { INif } from './interfaces/nif.interface';
import { ScrapperResponse } from './interfaces/scrapper.interface';
import { FindedNifDTO, FontSource } from 'src/database/dto/find-nif.dto';
import { CreateNifDTO } from 'src/database/dto/create-nif.dto';
import { NifModel } from 'src/database/model/nif.model';



@Injectable()
export class NifService {

    constructor(@InjectModel('nif') private nifModel: Model<NifModel>) {}

    async findNif(nif: String): Promise<FindedNifDTO> {
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
        return this.nifModel.findOne({ nif }).exec();
    }

    async findByScrappingService(nif: String): Promise<ScrapperResponse> {
        const { data: entityData } = await axios.post(process.env.SCRAPPER_URL, { nif }, {
            headers: {
                ContentType: 'application/json'
            }
        })
        
        return entityData
    }

    createNewEntityRecord(createNifDto: CreateNifDTO): Promise<INif> {
        return this.nifModel.create(createNifDto);
    }
}
