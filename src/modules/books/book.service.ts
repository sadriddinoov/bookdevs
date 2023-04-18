import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly BookRepo: Repository<Book>
  ) {}

  async findAll() {
    return this.BookRepo.find()
  }

  async findOne(bookId: number){
    return this.BookRepo.findOne({where: { bookId }, relations: { comments: true }})
  }

  async create(body: CreateBookDto, image: string, token: any) {
    body.userId = token.userId
    body.image = image
    const book = this.BookRepo.create(body)
    console.log(book);
    
    return await this.BookRepo.save(book)
    // const book = new Book()
    // book.category = body.categoryId
    // const newBook = this.BookRepo.create(body)
    // newBook.category = book
    // return 
  } 

  async update(body: UpdateBookDto, id: number) {
    return await this.BookRepo.update({bookId: id}, {title: body.title},)
  }

  async delete( id: number) {
    return await this.BookRepo.delete({bookId: id})
  }
}