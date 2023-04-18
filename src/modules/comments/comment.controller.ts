import { Body, Req, Controller, Post, UseGuards, Get, Put, Param, Delete } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update.comment.dto";
import { JWtGuard } from "../auth/guards/jwt.guard";
import { Request } from "express";

@Controller('comments')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}
    
    
    @Get()
    findAll() {
        return this.commentService.findAll()
    }
    
    @UseGuards(JWtGuard)
    @Post()
    create(@Body() body: CreateCommentDto, @Req() req: Request) {
        return this.commentService.create(body, req.user)
    }
    
    
    @UseGuards(JWtGuard)
    @Put(':id')
    update(@Param() id:any, @Body() body: UpdateCommentDto) {        
        return this.commentService.update(body, parseInt(id.id))
    }
    
    @UseGuards(JWtGuard)
    @Delete(':id')
    deletee(@Param() id:any) {        
        return this.commentService.delete(parseInt(id.id))
    }
}