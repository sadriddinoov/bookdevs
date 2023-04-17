import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/user.module';
import { User } from './modules/users/user.entity';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot( { isGlobal: true } ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: process.env.ELEPHANT_USERNAME,
      port: 5432,
      database: process.env.ELEPHANT_DATABASE,
      host: process.env.ELEPHANT_HOST,
      password: process.env.ELEPHANT_PASSWORD,
      entities: [User],
      synchronize: true
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
