import { IsUrl } from 'class-validator'
export class CreatePgUrlDto {
    @IsUrl()
    url: string;
}
