import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvConfig } from './config/env.config';
import { getTypeOrmConfig } from './config/typeorm.config';
import { PgUrlModule } from './pg-url/pg-url.module';
import { MgUrlModule } from './mg-url/mg-url.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [ EnvConfig ],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ ConfigModule ],
      useFactory: getTypeOrmConfig,
      inject: [ ConfigService ],
    }),
    PgUrlModule,
    MgUrlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
