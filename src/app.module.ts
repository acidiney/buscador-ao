import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { SearchModule } from './app/modules/search.module';
import { StatesModule } from './app/modules/states.module';
import { DatabaseModule } from './resources/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    SearchModule,
    StatesModule
  ],
  controllers: [AppController]
})
export class AppModule {}
