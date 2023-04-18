import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
    @IsNotEmpty()
    @IsString()
    comment: string;
    
    @IsNotEmpty()
    id: number;
    
    @IsNotEmpty()
    bookId: number
}