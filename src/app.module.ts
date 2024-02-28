import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.prod',
      isGlobal: true,
      load: [ EnvConfig ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
