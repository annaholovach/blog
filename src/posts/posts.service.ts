import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { FilesService } from '../files/files.service';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post,
                                   private fileService: FilesService) {}
    
    async create(dto: CreatePostDto, image: any) {
        const fileName = await this.fileService.createFile(image)
        const post = await this.postRepository.create({...dto, image: fileName})
        return post
    }

    async getAllPosts() {
        const post = await this.postRepository.findAll({include: {all: true}})
        return post
    }

    async getPostById(id: number) {
        const post = await this.postRepository.findOne({where: {id}})
        return post
    }

    async updatePost(id: number, dto: UpdatePostDto) {
        const updatedPost = await this.postRepository.update(dto, {
            where: {id},
            returning: true,
        })
        if (updatedPost[0] === 0) {
            throw new HttpException ('пост не найден', HttpStatus.NOT_FOUND)
        }
        return updatedPost[1][0]
    }

}
