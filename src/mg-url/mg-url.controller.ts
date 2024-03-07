import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MgUrlService } from './mg-url.service';
import { CreateMgUrlDto } from './dto/create-mg-url.dto';
import { UpdateMgUrlDto } from './dto/update-mg-url.dto';

@Controller('mg-url')
export class MgUrlController {
  constructor(private readonly mgUrlService: MgUrlService) {}

  @Post()
  create(@Body() createMgUrlDto: CreateMgUrlDto) {
    return this.mgUrlService.create(createMgUrlDto);
  }

  @Get()
  findAll() {
    return this.mgUrlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mgUrlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMgUrlDto: UpdateMgUrlDto) {
    return this.mgUrlService.update(+id, updateMgUrlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mgUrlService.remove(+id);
  }
}
