import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SearchController } from './search.controller';

import { EntitySchema } from '../database/schemas/entity.schema';
import { SearchService } from './search.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'entity', schema: EntitySchema }]),
  ],
  providers: [SearchService],
  controllers: [SearchController],
  exports: [SearchService]
})
export class SearchModule {}
