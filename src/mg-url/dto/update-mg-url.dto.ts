import { PartialType } from '@nestjs/mapped-types';
import { CreateMgUrlDto } from './create-mg-url.dto';

export class UpdateMgUrlDto extends PartialType(CreateMgUrlDto) {}
