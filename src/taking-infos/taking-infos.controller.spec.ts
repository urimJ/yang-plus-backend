import { Test, TestingModule } from '@nestjs/testing';
import { TakingInfosController } from './taking-infos.controller';

describe('TakingInfosController', () => {
  let controller: TakingInfosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TakingInfosController],
    }).compile();

    controller = module.get<TakingInfosController>(TakingInfosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
