import { Controller, Get, Param } from "@nestjs/common"

import { SearchService } from "../services/search.service"
import { EntityType } from "src/resources/database/schemas/entity.schema"

@Controller("search")
export class SearchController {
  constructor(private _searchService: SearchService) {}

  @Get("/nif/:nif")
  findNif(@Param('nif') nif: string) {
    return this._searchService.findOne(nif, EntityType.nif)
  }
  
  @Get("/bi/:bi")
  findBi(@Param('bi') bi: string) {
    return this._searchService.findOne(bi, EntityType.bi)
  }
}
