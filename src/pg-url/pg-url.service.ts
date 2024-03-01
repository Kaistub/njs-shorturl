import { Injectable } from '@nestjs/common';
import { CreatePgUrlDto } from './dto';
import { Repository } from 'typeorm'
import { PgUrl } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Functions } from 'src/common/functions/general.functions';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PgUrlService {
  private functions: Functions;

  constructor( 
    @InjectRepository( PgUrl )
    private pgUrlRepository: Repository< PgUrl >, 
    private configService: ConfigService ) {
    this.functions = new Functions();
  }
  async shortenUrl( createPgUrlDto: CreatePgUrlDto ) {
    // Create a new short URL
    const newPgUrl = new PgUrl();
    newPgUrl.originalUrl = createPgUrlDto.url;
    newPgUrl.shortUrl = await this.verifyShortUrl( this.functions.generateRandomString( this.configService.get<number>('VARIABLES.URL_LENGTH') ) );
    this.pgUrlRepository.save( newPgUrl );

    return {
      url: this.configService.get('VARIABLES.URL_BASE') + newPgUrl.shortUrl
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
