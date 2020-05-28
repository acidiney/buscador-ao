import { Controller, UseInterceptors } from '@nestjs/common';

import { SentryInterceptor } from '../sentry.interceptor';
import { NifService } from './nif/nif.service';

@UseInterceptors(SentryInterceptor)
@Controller('search')
export class SearchController {}
