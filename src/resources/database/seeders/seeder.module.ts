require('dotenv').config()
import { Module, Logger } from "@nestjs/common";
import { StatesModule } from "src/app/modules/states.module";
import { Seeder } from "./seeder";
import { StatesService } from "src/app/services/states.service";
import { DatabaseModule } from "../database.module";

@Module({
  imports: [
    DatabaseModule,
    StatesModule
  ],
  providers: [Logger, Seeder, StatesService]
})
export class SeederModule {}
