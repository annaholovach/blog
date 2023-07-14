import { ApiProperty } from "@nestjs/swagger";
import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
    value: string;
    description: string
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({example: '1', description: 'уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'admin', description: 'значение роли пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'администратор', description: 'описание роли'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}