import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author) private readonly AuthorRepo: Repository<Author>
  ) {}

  async findAll() {
    return this.AuthorRepo.find({relations: {books: true}})
  }

  async findOne(authorId: number){
    return this.AuthorRepo.findOne({where: { authorId }, relations: { books: true }})
  }

  async create(body: CreateAuthorDto, image: string) {
    const user = this.AuthorRepo.create(
        {
            name: body.name,
            surname: body.surname,
            born: body.born,
            died: body.died,
            bio: body.bio,
            country: body.country,
            image: image
        }
    )
    return await this.AuthorRepo.save(user)
  } 

  async update(body: UpdateAuthorDto, id: number) {
    return await this.AuthorRepo.update({authorId: id}, {name: body.name, surname: body.surname},)
  }

  async delete( id: number) {
    return await this.AuthorRepo.delete({authorId: id})
  }
}