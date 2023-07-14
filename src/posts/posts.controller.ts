import { Body, Controller, Post, UploadedFile, UseInterceptors, Get, Param, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
    
    constructor(private postService: PostsService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto,
               @UploadedFile() image) {
        return this.postService.create(dto, image)
    }

    @Get()
    getAll() {
        return this.postService.getAllPosts()
    }

    @Get('/:id')
    getOne(@Param('id') id: number) {
        return this.postService.getPostById(id)
    }

    @Put('/:id')
    update(@Body() dto : UpdatePostDto, @Param('id') id : number) {
        return this.postService.updatePost(id, dto)
    }
}
