import { Body, Req, Controller, Post, UseGuards, Get, Param, UseInterceptors, UploadedFile, Put, Delete } from "@nestjs/common";
import { BookService } from "./book.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { resolve } from "path";
import { CreateBookDto } from "./dto/create-book.dto";
import { JWtGuard } from "../auth/guards/jwt.guard";
import { Request } from "express";
import { UpdateBookDto } from "./dto/update-book.dto";

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {}
    
    @Get()
    findAll() {
        return this.bookService.findAll()
    }

    @Get(':id')
    findOne(@Param() bookId: number) {
        return this.bookService.findOne(+bookId)
    }

    @UseGuards(JWtGuard)
    @Post()
    @UseInterceptors(
        FileInterceptor('image', {
        storage: diskStorage({
            destination:resolve(process.cwd(), 'images'),
            filename: (req, file, callback) => {
            const fileName = file.originalname.split('.')
            const fileExt = fileName[fileName.length - 1]
            callback(null, `${Date.now()}.${fileExt}`)
            },
        }),
    })
    )
    create(@Body() body: CreateBookDto, @UploadedFile() file: Express.Multer.File, @Req() req: Request) {
        return this.bookService.create(body, file.originalname, req.user)
    }


    @UseGuards(JWtGuard)
    @Put(':id')
    update(@Param() id:any, @Body() body: UpdateBookDto) {        
        return this.bookService.update(body, parseInt(id.id))
    }

    @UseGuards(JWtGuard)
    @Delete(':id')
    deletee(@Param() id:any) {        
        return this.bookService.delete(parseInt(id.id))
    }
}