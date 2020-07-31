import { Injectable } from '@nestjs/common';
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
}
