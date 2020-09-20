import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getHello(@Res() res: Response): void {
    res.redirect(303, 'https://github.com/acidiney/buscador-ao')
  }
}
