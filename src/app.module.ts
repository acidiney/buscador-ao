import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { NifModule } from './nif/nif.module';
import { ProvincesModule } from './provinces/provinces.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    DatabaseModule,
    NifModule,
    SearchModule,
    ProvincesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
