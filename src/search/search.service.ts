import axios from 'axios';
import * as https from 'https'
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { EntityModel } from '../database/model/entity.model';
import { CreateEntityDTO } from '../database/dto/create-entity.dto';
import { IEntity } from './interfaces/entity.interface';

import { ScrapperResponse } from './interfaces/scrapper.interface';

import { FindedEntityDTO, FontSource } from '../database/dto/find-entity.dto';

import { EntityType } from 'src/database/schemas/entity.schema';

@Injectable()
export class SearchService {
  constructor(@InjectModel('entity') public EntityModel: Model<EntityModel>) {}

  async findEntity(
    identifier: String,
    document_type: EntityType = EntityType.nif
  ): Promise<FindedEntityDTO> {
    const localEntity = await this.findLocal(identifier, document_type);
    if (localEntity) return { data: localEntity, source: FontSource.local };

    const serverNif = await this.findByScrappingService(
      identifier,
      document_type
    );
    if (serverNif.retorno.cod === 964)
      return { data: null, source: FontSource.all };

    const createNewRecord = await this.createNewEntityRecord({
      identifier: serverNif.data.numero,
      type: document_type,
      name: serverNif.data.nome,
    });

    return {
      data: createNewRecord,
      source: document_type === 'BI' ? FontSource.guiche : FontSource.mifin,
    };
  }

  async findLocal(identifier: String, type: EntityType): Promise<IEntity> {
    const entityRecord = await this.EntityModel.findOne({
      identifier,
    }).exec();

    if (!entityRecord) return;
    return {
      name: entityRecord.name,
      [type.toLowerCase()]: entityRecord.identifier,
    };
  }

  async findByScrappingService(
    identifier: String,
    document_type: EntityType
  ): Promise<ScrapperResponse> {
    let entityData;

    if (document_type === 'NIF') {
      entityData = await axios
        .post(
          process.env.SCRAPPER_URL,
          { nif: identifier },
          {
            headers: {
              ContentType: 'application/json',
            },
          }
        )
        .then(({ data }) => {
          if (data.retorno.cod === 200) {
            return {
              retorno: data.retorno,
              data: {
                numero: data.data.nif,
                nome: data.data.nome,
              },
            };
          }

          return data;
        });
    }

    if (document_type === 'BI') {
      entityData = await axios
        .get(`${process.env.VALIDATE_BI}?bi=${identifier}`, {
          headers: {
            ContentType: 'application/json'
          },
        })
        .then(({ data }) => {
          if (!data.sucess) {
            return {
              retorno: {
                cod: 964,
                message: data.error.message,
              },
              data: [],
            };
          }

          return {
            retorno: {
              cod: 200,
              message: '',
            },
            data: data.data
          };
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return entityData;
  }

  async createNewEntityRecord(CreateEntityDTO: CreateEntityDTO): Promise<IEntity> {
    const newRecord = await this.EntityModel.create(CreateEntityDTO);

    const key = CreateEntityDTO.type.toLowerCase();
    return {
      name: newRecord.name,
      [key]: newRecord.identifier,
    };
  }
}
