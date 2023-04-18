import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comments } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update.comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comments) private readonly CommentRepo: Repository<Comments>
  ) {}

  async findAll() {
    return this.CommentRepo.find()
  }

  async create(body: CreateCommentDto, token: any) {
    body.id = token.userId
    const comment = this.CommentRepo.create(body)
    
    return await this.CommentRepo.save(comment)
  } 

  async update(body: UpdateCommentDto, id: number) {
    return await this.CommentRepo.update({commentId: id}, {comment: body.comment})
  }

  async delete( id: number) {
    return await this.CommentRepo.delete({commentId: id})
  }
}