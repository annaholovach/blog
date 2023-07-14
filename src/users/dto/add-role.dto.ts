import { IsString, IsNumber } from "class-validator";

export class AddRoleDto {

    @IsString({message: 'роль должна быть строкой'})
    readonly value: string;

    @IsNumber({}, {message: 'должно быть числом'})
    readonly userId: number
}