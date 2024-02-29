import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getTypeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: configService.get('PG_DB.PG_HOST'),
    port: +configService.get<number>('PG_DB.PG_PORT'),
    username: configService.get('PG_DB.PG_USER'),
    password: configService.get('PG_DB.PG_PWD'),
    database: configService.get('PG_DB.PG_DB'),
    autoLoadEntities: configService.get<boolean>('PG_DB.PG_AUTOLOAD'),
    synchronize: configService.get<boolean>('PG_DB.PG_SYNC'),
  });