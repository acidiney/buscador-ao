import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { CreateProvinceDto } from './dtos/create-province.dto';

@Controller('provinces')
export class ProvincesController {
    constructor(private readonly provincesService: ProvincesService) {}

    @Post('insert-many')
    async insertMany(@Body() createProvinceDto: CreateProvinceDto []) {
        return await this.provincesService.insertMany(createProvinceDto);
    }

    @Get()
    async findAll() {
        return await this.provincesService.findAll();
    }
}
