import {
  Controller,
  UseInterceptors,
  Query,
  HttpException,
  HttpStatus,
  Get,
} from '@nestjs/common';

import { SentryInterceptor } from '../sentry.interceptor';
import { FindDocument } from './interfaces/find-document.interface';
import { SearchService } from './search.service';

@UseInterceptors(SentryInterceptor)
@Controller('search')
export class SearchController {
  constructor(private _searchService: SearchService) {}

  @Get('/document')
  async findDocument(@Query() entity: FindDocument) {
    const finderResponse = await this._searchService.findEntity(
      entity.number,
      entity.type
    );
    if (!finderResponse.data)
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Não foi encontramos o documento ${entity.type} - ${entity.number} em nossos registros!`,
        },
        HttpStatus.NOT_FOUND
      );

    return finderResponse;
  }
}
