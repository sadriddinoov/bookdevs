import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    title: string;
    
    @IsNotEmpty()
    pages: number;
    
    @IsNotEmpty()
    year: number
    
    @IsNotEmpty()
    @IsString()
    price: string

    @IsNotEmpty()
    @IsString()
    country: string

    @IsNotEmpty()
    @IsString()
    description: string

    image: string

    @IsNotEmpty()
    categoryId: any

    userId: number

    @IsNotEmpty()
    authorId: number
}