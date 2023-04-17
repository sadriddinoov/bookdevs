import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, SigninDto } from './dto/create-user.dto';
import { User } from '../users/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ChangeProfile, ChangePassword } from './dto/change-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly authRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}
  
  async create(data: CreateUserDto) {
    const user = this.authRepo.create(data)
    await this.authRepo.save(user)
    return user
  }

  async signin(body: SigninDto) {
    const { email, password } = body;
    const user = await this.authRepo.findOne({ where: { email, password } }) 
    const token = this.jwtService.sign({ userId: user.id })
    return { acces_token: token }   
  }

  async data(user: any, body: ChangeProfile) {
    return this.authRepo.update({id: user.userId}, { name: body.name, surname: body.surname, phone: body.phone, email: body.email })
  }

  async password(user: any, body: ChangePassword) {
    const changed_user = await this.authRepo.findOne({ where: { email: body.email, password: body.password } }) 
    if (!changed_user.id == user.userId) {
        return false
    }

    return this.authRepo.update({id: user.userId}, { password: body.new_password })
    
  }
}