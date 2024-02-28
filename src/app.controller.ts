import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StatusDto } from './common/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get( )
  healthCheck( ): StatusDto {
    return this.appService.status( );
  }
}
