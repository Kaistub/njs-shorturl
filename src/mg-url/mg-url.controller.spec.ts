import { Test, TestingModule } from '@nestjs/testing';
import { MgUrlController } from './mg-url.controller';
import { MgUrlService } from './mg-url.service';

describe('MgUrlController', () => {
  let controller: MgUrlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MgUrlController],
      providers: [MgUrlService],
    }).compile();

    controller = module.get<MgUrlController>(MgUrlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
