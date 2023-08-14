import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {

    @ApiProperty({example: 1, description: 'Id користувача'})
    readonly userId: number;

    @ApiProperty({example: 'забанили за погану поведінку', description: 'причина бану'})
    readonly banReason: string;
}