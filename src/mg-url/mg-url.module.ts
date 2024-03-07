import { Module } from '@nestjs/common';
import { MgUrlService } from './mg-url.service';
import { MgUrlController } from './mg-url.controller';

@Module({
  controllers: [MgUrlController],
  providers: [MgUrlService],
})
export class MgUrlModule {}
