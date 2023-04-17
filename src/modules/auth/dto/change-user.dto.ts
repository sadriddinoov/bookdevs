import { IsString, IsNotEmpty } from 'class-validator';

export class ChangeProfile {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    surname: string;
    
    @IsNotEmpty()
    @IsString()
    phone: string
    
    @IsNotEmpty()
    @IsString()
    email: string
}

export class ChangePassword {  
    @IsNotEmpty()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string;
    
    @IsNotEmpty()
    @IsString()
    new_password: string;
}