import { Injectable } from '@nestjs/common';
import { CreateMgUrlDto } from './dto/create-mg-url.dto';
import { UpdateMgUrlDto } from './dto/update-mg-url.dto';

@Injectable()
export class MgUrlService {
  create(createMgUrlDto: CreateMgUrlDto) {
    return 'This action adds a new mgUrl';
  }

  findAll() {
    return `This action returns all mgUrl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mgUrl`;
  }

  update(id: number, updateMgUrlDto: UpdateMgUrlDto) {
    return `This action updates a #${id} mgUrl`;
  }

  remove(id: number) {
    return `This action removes a #${id} mgUrl`;
  }
}
