import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Province, ProvinceSchema } from './schemas/province.schema';
import { ProvincesService } from './provinces.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Province.name,
                schema: ProvinceSchema 
            }
        ])
    ],
    providers: [ProvincesService]
})
export class ProvincesModule {}
