import { Body, Req, Controller, Post, UseGuards, Get, Param, UseInterceptors, UploadedFile, Put, Delete } from "@nestjs/common";
import { AuthorService } from "./author.service";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { resolve } from "path";
import { JWtGuard } from "../auth/guards/jwt.guard";
import { UpdateAuthorDto } from "./dto/update-author.dto";

@Controller('authors')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}
    
    @Get()
    findAll() {
        return this.authorService.findAll()
    }

    @Get(':id')
    findOne(@Param() authorId: string) {
        return this.authorService.findOne(parseInt(authorId))
    }

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
    create(@Body() body: CreateAuthorDto, @UploadedFile() file: Express.Multer.File) {
        return this.authorService.create(body, file.originalname)
    }
    
    @UseGuards(JWtGuard)
    @Put(':id')
    update(@Param() id:any, @Body() body: UpdateAuthorDto) {        
        return this.authorService.update(body, parseInt(id.id))
    }

    @UseGuards(JWtGuard)
    @Delete(':id')
    deletee(@Param() id:any) {        
        return this.authorService.delete(parseInt(id.id))
    }
}