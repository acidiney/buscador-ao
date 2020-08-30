require('dotenv').config()
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';

async function bootstrap() {
  Sentry.init({
    dsn:
      process.env.SENTY_DSN,
  });
  const app = await NestFactory.create(AppModule);
  await app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
