import { Module } from '@nestjs/common';
import { NifController } from './nif.controller';
import { SearchModule } from 'src/search/search.module';

@Module({
  imports: [
    SearchModule,
  ],
  controllers: [NifController],
})
export class NifModule {}
