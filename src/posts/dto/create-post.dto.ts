import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {

    @ApiProperty({example: 'Sample text', description: 'заголовок поста'})
    readonly title: string;

    @ApiProperty({example: 'Sample content', description: 'контент'})
    readonly content: string;

    @ApiProperty({example: 1, description: 'Id автора'})
    readonly userId: number;
}