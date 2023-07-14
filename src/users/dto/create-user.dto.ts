import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@gmail.com', description: 'почта'})
    @IsString({message: 'должно быть строкой'})
    @IsEmail({}, {message: 'некорректный email'})
    readonly email: string;

    @ApiProperty({example: 'root', description: 'пароль'})
    @IsString({message: 'должно быть строкой'})
    @Length(4, 16, {message: 'должен быть от 4 до 16 символов'})
    readonly password: string;
}