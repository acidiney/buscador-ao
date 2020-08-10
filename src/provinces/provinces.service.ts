import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Province } from './schemas/province.schema';
import { Model } from 'mongoose';
import { CreateProvinceDto } from './dtos/create-province.dto';

@Injectable()
export class ProvincesService {
    constructor(@InjectModel(Province.name) private provinceModel: Model<Province>) {}

    async findAll(): Promise<Province[]> {
        return await this.provinceModel
        
        .find()
        .exec();
    }

    async insertMany(data: CreateProvinceDto []): Promise<CreateProvinceDto[]> {
        return await this.provinceModel
        
        .insertMany(data);
    }

    async findById(_id: string): Promise<CreateProvinceDto> {
        const province = await this.provinceModel.findOne({ _id });

        if (!province) {
            console.log(province);
            throw new NotFoundException('A província que tentou encontrar não existe');
        }

        return province;
    }
}
