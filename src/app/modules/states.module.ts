import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"

import {
  Provinces,
  StatesSchema,
} from "../../resources/database/schemas/states.schema"

import { StatesService } from "../services/states.service"
import { StatesController } from "../controllers/states.controller"

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Provinces.name,
        schema: StatesSchema,
      },
    ]),
  ],
  providers: [StatesService],
  controllers: [StatesController],
  exports: [StatesService, MongooseModule],
})
export class StatesModule {}
