import { Body, Controller, Post, UploadedFile, UseInterceptors, Get, Param, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Posts } from './posts.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {User} from "../users/users.model";

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
    
    constructor(private postService: PostsService) {}

    @ApiOperation({summary: 'створити пост'})
    @ApiResponse({status: 200, type: Posts})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto,
               @UploadedFile() image) {
        return this.postService.create(dto, image)
    }

    @ApiOperation({summary: 'отримати всі пости'})
    @ApiResponse({status: 200, type: [Posts]})
    @Get()
    getAll() {
        return this.postService.getAllPosts()
    }

    @ApiOperation({summary: 'отримати вказаний пост'})
    @ApiResponse({status: 200, type: Posts})
    @Get('/:id')
    getOne(@Param('id') id: number) {
        return this.postService.getPostById(id)
    }

    @ApiOperation({summary: 'оновити вказаний пост'})
    @ApiResponse({status: 200, type: Posts})
    @Put('/:id')
    update(@Body() dto : UpdatePostDto, @Param('id') id : number) {
        return this.postService.updatePost(id, dto)
    }
}
