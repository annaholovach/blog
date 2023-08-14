import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class AddRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'назва ролі'})
    @IsString({message: 'роль должна быть строкой'})
    readonly value: string;

    @ApiProperty({example: 1, description: 'Id користувача'})
    @IsNumber({}, {message: 'должно быть числом'})
    readonly userId: number
}