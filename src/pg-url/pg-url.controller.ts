import { Controller, Get, Post, Body, Patch, Param, Delete, Redirect } from '@nestjs/common';
import { PgUrlService } from './pg-url.service';
import { CreatePgUrlDto } from './dto/create-pg-url.dto';

@Controller('pg-url')
export class PgUrlController {
  constructor(private readonly pgUrlService: PgUrlService) {}

  @Post('shorten')
  create(@Body() createPgUrlDto: CreatePgUrlDto) {
    return this.pgUrlService.shortenUrl( createPgUrlDto );
  }

  @Get(':url')
  @Redirect()
  async findOne(@Param('url') url: string) {
    const originalUrl = await this.pgUrlService.getOriginal( url );
    return { url: originalUrl };
  }

}
