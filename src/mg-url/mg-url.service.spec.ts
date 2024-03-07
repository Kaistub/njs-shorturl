import { Test, TestingModule } from '@nestjs/testing';
import { MgUrlService } from './mg-url.service';

describe('MgUrlService', () => {
  let service: MgUrlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MgUrlService],
    }).compile();

    service = module.get<MgUrlService>(MgUrlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
