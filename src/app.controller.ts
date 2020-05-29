import { Controller, Get, UseInterceptors, Res } from '@nestjs/common';
import { SentryInterceptor } from './sentry.interceptor';
import { AppService } from './app.service';
import { Response } from 'express';

@UseInterceptors(SentryInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response): void {
    res.redirect(303, 'https://github.com/acidiney/buscador-ao')
  }
}
