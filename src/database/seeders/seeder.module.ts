require('dotenv').config()
import { Module, Logger } from "@nestjs/common";
import { ProvincesModule } from "src/provinces/provinces.module";
import { Seeder } from "./seeder";
import { ProvincesService } from "src/provinces/provinces.service";
import { DatabaseModule } from "../database.module";

@Module({
  imports: [
    DatabaseModule,
    ProvincesModule
  ],
  providers: [Logger, Seeder, ProvincesService]
})
export class SeederModule {}
