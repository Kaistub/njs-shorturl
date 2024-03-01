import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('MainService');
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>( 'PORT' ) || 3001;

  app.enableCors();
  app.setGlobalPrefix('v1');


  await app.listen( port );
  logger.log( `Application listening on port ${ port }` );
}
bootstrap();