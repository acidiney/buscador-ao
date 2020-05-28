import { Test, TestingModule } from '@nestjs/testing';
import { NifService } from './nif.service';
import { async } from 'rxjs/internal/scheduler/async';

describe('NifService', () => {
  let service: NifService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NifService],
    }).compile();

    service = module.get<NifService>(NifService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get nif from scrapper service', async () => {
    const response = await service.findByScrappingService('0095959494994');
    console.log(response)
  })
});
