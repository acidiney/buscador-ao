import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common"
import { Model } from "mongoose"
import { InjectModel } from "@nestjs/mongoose"
import slugify from 'slugify'

import { CreateStateDto } from "../dtos/states/create-state.dto"

import { Provinces } from "../../resources/database/schemas/states.schema"
import { states as statesMessages } from "../dictionaries/states.dictionary"

@Injectable()
export class StatesService {
  constructor(@InjectModel(Provinces.name) private statesModel: Model<Provinces>) {}

  async create(state: CreateStateDto): Promise<CreateStateDto> {

    const exists = await this.findByName(state.name)

    if (!! exists) {
      throw new BadRequestException(statesMessages.alreadyExists)
    }

    const stateWithSlug = {
      ...state,
      slug: slugify(state.name, {
        lower: true,
        replacement: '-',
      })
    } 

    return this.statesModel.create(stateWithSlug)
  }

  findAll(): Promise<Provinces[]> {
    return this.statesModel.find().exec()
  }

  async findById(id: string): Promise<CreateStateDto> {
    const state = await this.statesModel.findById(id)

    if (!state) {
      throw new NotFoundException(statesMessages.notFound)
    }

    return state
  }

  async findByName(name: string) {
    return await this.statesModel.findOne({ name })
  }

  async findBySlug(slug: string) {
    const state = await this.statesModel.findOne({ slug })
    
    if (!state) {
      throw new NotFoundException(statesMessages.notFound)
    }
    return state
  }
}
