import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';


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
      entities: [],
      synchronize: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
