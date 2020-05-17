import { Test, TestingModule } from '@nestjs/testing';
import { NifController } from './nif.controller';

describe('Nif Controller', () => {
  let controller: NifController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NifController],
    }).compile();

    controller = module.get<NifController>(NifController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
