import { Req, Controller, UseGuards, Get } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";
import { JWtGuard } from "../auth/guards/jwt.guard";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
  @UseGuards(JWtGuard)
  @Get('/profile')
  profile(@Req() req: Request) {
    return this.userService.profile(req.user)
  }
}