import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProvinceDto } from './dtos/create-province.dto';
import { Province } from './schemas/province.schema';

@Injectable()
export class ProvincesService {
    constructor(@InjectModel(Province.name) private provinceModel: Model<Province>) {}

    async create(province: CreateProvinceDto): Promise<CreateProvinceDto> {
        const { name } = province;
        const exists = await this.provinceModel.findOne({ name });
        
        if (!!exists) {
            throw new BadRequestException('Esta província já existe no banco de dados.');
        }

        return await this.provinceModel.create(province);
    }

    async findAll(): Promise<Province[]> {
        return await this.provinceModel
        
        .find()
        .exec();
    }

    async findById(id: string): Promise<CreateProvinceDto> {
        const province = await this.provinceModel.findById(id);

        if (!province) {
            console.log(province);
            throw new NotFoundException('A província que tentou encontrar não existe');
        }

        return province;
    }
}
