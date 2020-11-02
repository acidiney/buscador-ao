import { Controller, Get, Param, BadRequestException } from "@nestjs/common"

import { StatesService } from "../services/states.service"

@Controller("provinces")
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Get()
  async findAll() {
    return await this.statesService.findAll()
  }

  @Get(":name")
  async findOne(@Param("name") name: string) {
    if (typeof name !== "string")
      throw new BadRequestException("Por favor insira um ID válido.")

    return await this.statesService.findBySlug(name)
  }
}
