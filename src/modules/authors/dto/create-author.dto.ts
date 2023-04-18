import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAuthorDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    surname: string;
    
    @IsNotEmpty()
    born: string

    died:string

    image: string
  
    @IsNotEmpty()
    @IsString()
    country: string

    @IsNotEmpty()
    @IsString()
    bio: string
}