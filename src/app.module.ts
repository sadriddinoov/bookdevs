import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/user.module';
import { User } from './modules/users/user.entity';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryModule } from './modules/categories/category.module';
import { Category } from './modules/categories/category.entity';
import { Author } from './modules/authors/author.entity';
import { AuthorModule } from './modules/authors/author.module';
import { Book } from './modules/books/book.entity';
import { BookModule } from './modules/books/book.module';
import { Comments } from './modules/comments/comment.entity';
import { CommentModule } from './modules/comments/comment.module';


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
      entities: [User, Category, Author, Book, Comments],
      synchronize: true
    }),
    UserModule,
    AuthModule,
    CategoryModule,
    AuthorModule,
    BookModule,
    CommentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
