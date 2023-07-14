import { ApiProperty } from "@nestjs/swagger";
import { Model, Table, Column, DataType, BelongsToMany, HasMany } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";


interface UserCreationAttrs {
    email: string;
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@gmail.com', description: 'почта'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'root', description: 'пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'забанен или нет'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'забанили за плохое поведение', description: 'причина блокировки'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @HasMany(() => Post)
    posts: Post[]
}