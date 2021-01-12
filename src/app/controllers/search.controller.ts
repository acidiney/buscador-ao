import { Controller, Get, Param } from "@nestjs/common"

import { SearchService } from "../services/search.service"
import { EntityType } from "src/resources/database/schemas/entity.schema"

@Controller("search")
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get("/:type/:id")
  findDocument(@Param('type') typeDocument: EntityType, @Param('id') id: string) {
    return this.searchService.findOne(id, EntityType[typeDocument])
  }
}
