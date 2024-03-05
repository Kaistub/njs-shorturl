import { Injectable } from '@nestjs/common';
import { CreatePgUrlDto } from './dto';
import { Repository } from 'typeorm'
import { PgUrl } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Functions } from 'src/common/functions';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class PgUrlService {
  private functions: Functions;

  constructor( 
    @InjectRepository( PgUrl )
    private pgUrlRepository: Repository< PgUrl >, 
    private configService: ConfigService ) {
    this.functions = new Functions();
  }
  async shortenUrl( createPgUrlDto: CreatePgUrlDto, request: Request, controller_prefix: string ) {
    // Create a new short URL
    const newPgUrl = new PgUrl();
    newPgUrl.originalUrl = createPgUrlDto.url;
    newPgUrl.shortUrl = await this.verifyShortUrl( this.functions.generateRandomString( this.configService.get<number>('VARIABLES.URL_LENGTH') ) );
    this.pgUrlRepository.save( newPgUrl );

    const serverUrl =  this.configService.get('VARIABLES.CUSTOM_URL_BASE') == "" ? request.protocol + '://' + request.get('host') : this.configService.get('VARIABLES.CUSTOM_URL_BASE'); 
    const fullUrl = serverUrl + '/' + this.configService.get('API_PREFIX') + '/' + controller_prefix + '/' + newPgUrl.shortUrl;
    return {
      url: fullUrl
    };
  }

  async getOne( shortUrl: string ) {
    return await this.pgUrlRepository.findOne({ where: { shortUrl: shortUrl } });
  }

  async getOriginal( shortUrl: string ) {
    const url: PgUrl = await this.getOne( shortUrl );

    if ( !url ) {
      return this.configService.get('VARIABLES.URL_BASE');
    }
    
    return url.originalUrl;
  }

  async verifyShortUrl( shortUrl: string ): Promise< string > {

    const existingUrl = await this.getOne( shortUrl );

    if ( existingUrl ) {
      const newShortUrl = this.functions.generateRandomString( this.configService.get<number>( 'VARIABLES.URL_LENGTH' ) );
      return this.verifyShortUrl( newShortUrl );
    }

    return shortUrl;

  }
}
