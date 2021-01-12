import { Model } from "mongoose"
import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"

import { EntityModel } from "../models/entity.model"
import { EntityType } from "../../resources/database/schemas/entity.schema"

import { IEntity } from "../interfaces/entity.interface"
import { ScrapperResponse } from "../interfaces/scrapper.interface"

import { CreateEntityDTO } from "../dtos/entities/create-entity.dto"

import { fetchBI, fetchNIF } from "src/resources/scrapper/fetch.scrapper"
import { FoundEntityDTO, FontSource } from "../dtos/entities/find-entity.dto"

@Injectable()
export class SearchService {
  constructor(
    @InjectModel("entity")
      public entityModel: Model<EntityModel>
  ) {}

  /**
   * Check if document exists localy
   * first if not try to find in external resource
   * 
   * @param identifier 
   * @param documentType 
   */
  async findOne(
    identifier: string,
    documentType: EntityType
  ): Promise<FoundEntityDTO> {

    const localyDocument = await this.lookForDocumentLocaly(identifier, documentType)

    if (localyDocument) {
      return { data: localyDocument, source: FontSource.local }
    }

    const externalData = await this.fetchExternalService(
      identifier,
      documentType
    )

    const createNewRecord = await this.createNewEntityRecord({
      identifier: externalData.number,
      name: externalData.name,
      type: documentType,
    })

    return {
      data: createNewRecord,
      source: documentType === "BI" ? FontSource.guiche : FontSource.mifin,
    }
  }

  /**
   * Look document localy
   * @param identifier 
   * @param type 
   */
  async lookForDocumentLocaly(identifier: String, type: EntityType): Promise<IEntity> {

    const entityRecord = await this.entityModel.findOne({
      identifier,
    }).exec()

    if (!entityRecord) return
    
    return {
      name: entityRecord.name,
      [type.toLowerCase()]: entityRecord.identifier,
    }
  }

  /**
   * fetch document for external resources
   * @param identifier 
   * @param document_type 
   */
  fetchExternalService(
    identifier: string,
    document_type: EntityType
  ): Promise<ScrapperResponse> {
    if (document_type === "NIF") {
      return fetchNIF(identifier)
    }

    return fetchBI(identifier)
  }

  /**
   * create a new record
   * @param createEntityDTO 
   */
  async createNewEntityRecord(
    createEntityDTO: CreateEntityDTO
  ): Promise<IEntity> {
    const newRecord = await this.entityModel.create(createEntityDTO)

    const key = createEntityDTO.type.toLowerCase()

    return {
      name: newRecord.name,
      [key]: newRecord.identifier,
    }
  }
}
