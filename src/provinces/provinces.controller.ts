import { Controller, Post, Body, Get, Param, HttpException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
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

    @Get(':id')
    async findOne(@Param('id') id: string) {
        if (typeof id !== 'string')
            throw new BadRequestException('Por favor insira um ID válido.')

        return await this.provincesService.findById(id);
    }
}
