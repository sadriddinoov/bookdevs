import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateAuthorDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    surname: string;
}