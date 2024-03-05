import { Controller, Get, Post, Body, Patch, Param, Delete, Redirect, Req } from '@nestjs/common';
import { PgUrlService } from './pg-url.service';
import { CreatePgUrlDto } from './dto/create-pg-url.dto';
import { Request } from 'express';

const CONTROLLER_PREFIX = 'pg-url';

@Controller( CONTROLLER_PREFIX )
export class PgUrlController {
  constructor(private readonly pgUrlService: PgUrlService) {}

  @Post('shorten')
  create(@Body() createPgUrlDto: CreatePgUrlDto, @Req() request: Request ) {
    return this.pgUrlService.shortenUrl( createPgUrlDto, request, CONTROLLER_PREFIX );
  }

  @Get(':id')
  @Redirect()
  async findOne(@Param('id') id: string) {
    const originalUrl = await this.pgUrlService.getOriginal( id );
    return { url: originalUrl };
  }

}
