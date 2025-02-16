import { Test, TestingModule } from '@nestjs/testing';
import { TakingInfosService } from './taking-infos.service';

describe('TakingInfosService', () => {
  let service: TakingInfosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TakingInfosService],
    }).compile();

    service = module.get<TakingInfosService>(TakingInfosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
