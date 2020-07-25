import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Province, ProvinceSchema } from './schemas/province.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Province.name,
                schema: ProvinceSchema 
            }
        ])
    ]
})
export class ProvincesModule {}
