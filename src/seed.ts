import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Seeder } from "./resources/database/seeders/seeder";
import { SeederModule } from "./resources/database/seeders/seeder.module";

async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule)
  .then(ctx => {
    const logger = ctx.get(Logger);
    const seeder = ctx.get(Seeder);

    seeder.seed()
    .then(() => {
      logger.debug("Seeding complete! :)");
    })
    .catch(error => {
      logger.error("Seeding failed! :(");

      throw error;
    });

    setTimeout(() => {
      ctx.close();
    }, 2000);
  })
  .catch(error => {
    throw error;
  });
}

bootstrap();
