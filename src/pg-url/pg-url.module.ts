import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PgUrlService } from './pg-url.service';
import { PgUrlController } from './pg-url.controller';
import { PgUrl } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([PgUrl])
  ],
  controllers: [PgUrlController],
  providers: [PgUrlService],
})
export class PgUrlModule {}
