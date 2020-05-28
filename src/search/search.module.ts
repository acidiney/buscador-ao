import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BiService } from './bi/bi.service';
import { SearchController } from './search.controller';
import { NifService } from './nif/nif.service';

import { EntitySchema } from '../database/schemas/entity.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'entity', schema: EntitySchema }]),
  ],
  providers: [BiService, NifService],
  controllers: [SearchController],
  exports: [NifService]
})
export class SearchModule {}
