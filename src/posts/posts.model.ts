import { Model, Table, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { ApiProperty } from "@nestjs/swagger";


interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string
}

@Table({tableName: 'posts'})
export class Posts extends Model<Posts, PostCreationAttrs> {

    @ApiProperty({example: '1', description: 'унікальний ідентифікатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Sample text', description: 'заголовок поста'})
    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @ApiProperty({example: 'Sample content', description: 'контент'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example: 'image.jpg', description: 'зображення'})
    @Column({type: DataType.STRING})
    image: string;

    @ApiProperty({example: 1, description: 'Id автора'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number

    @BelongsTo(() => User)
    author: User
}