import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { NifController } from './nif.controller';
import { NifService } from './nif.service';
import { NifSchema } from 'src/database/schemas/nif.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'nif', schema: NifSchema }])],
  controllers: [NifController],
  providers: [NifService]
})

export class NifModule {}
