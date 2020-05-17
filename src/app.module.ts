import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { NifModule } from './nif/nif.module';

@Module({
  imports: [DatabaseModule, NifModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
