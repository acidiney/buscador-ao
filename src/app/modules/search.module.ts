import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"

import { SearchService } from "../services/search.service"
import { SearchController } from "../controllers/search.controller"

import { EntitySchema } from "../../resources/database/schemas/entity.schema"

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "entity", schema: EntitySchema }]),
  ],
  providers: [SearchService],
  controllers: [SearchController],
  exports: [SearchService],
})
export class SearchModule {}
