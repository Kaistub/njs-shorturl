import { HttpStatus, Injectable } from '@nestjs/common';
import { StatusDto } from './common/types';

@Injectable( )
export class AppService {
  status( ): StatusDto {
    return {
      status: HttpStatus.OK,
    }
  }
}
