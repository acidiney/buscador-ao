import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { NifService } from './nif.service';
import { FindedNifDTO } from '../database/dto/find-nif.dto';
import { UseInterceptors } from '@nestjs/common';
import { SentryInterceptor } from '../sentry.interceptor';
@UseInterceptors(SentryInterceptor)
@Controller('nif')
export class NifController {
  constructor(private _nifService: NifService) {}

  @Get('/:nif')
  async findEntity(@Param('nif') nif: String): Promise<FindedNifDTO> {
    const finderResponse = await this._nifService.findNif(nif);
    if (!finderResponse.data)
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `The provided nif ${nif} was not founded!`,
        },
        HttpStatus.NOT_FOUND
      );

    return finderResponse;
  }
}
