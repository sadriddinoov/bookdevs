import { Body, Req, Controller, Post, UseGuards, Put } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { CreateUserDto, SigninDto } from "./dto/create-user.dto";
import { Request } from "express";
import { ChangeProfile, ChangePassword } from "./dto/change-user.dto";
import { JWtGuard } from "./guards/jwt.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) {}
    
    @Post('signup')
    create(@Body() body: CreateUserDto ) {
        return this.AuthService.create(body)
    }

    @Post('signin')
    signin(@Body() body: SigninDto) {
        const acces_token = this.AuthService.signin(body)
        return acces_token
    }

    @UseGuards(JWtGuard)
    @Put('data')
    datachange(@Req() req: Request, @Body() body: ChangeProfile) {
        return this.AuthService.data(req.user, body)
    }

    @UseGuards(JWtGuard)
    @Put('password')
    passwordchange(@Req() req: Request, @Body() body: ChangePassword) {
        return this.AuthService.password(req.user, body)
    }
}