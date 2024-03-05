import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './common/filters';
import { ValidationPipe } from '@nestjs/common';
 
async function bootstrap() {
  const logger = new Logger( 'MainService' );
  const app = await NestFactory.create( AppModule );
  const configService = app.get(ConfigService);
  const port = configService.get<number>( 'PORT' );

  app.enableCors();
  app.setGlobalPrefix( configService.get<string>( 'API_PREFIX' ) );
  app.useGlobalFilters( 
    new HttpExceptionFilter() 
  );
  app.useGlobalPipes( new ValidationPipe() );


  await app.listen( port );
  logger.log( `Application listening on port ${ port }` );
}
bootstrap();