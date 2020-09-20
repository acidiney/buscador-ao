require('dotenv').config()
require('newrelic')
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
