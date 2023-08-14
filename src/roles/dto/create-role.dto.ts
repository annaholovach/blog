import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'адміністратор'})
    readonly value: string;

    @ApiProperty({example: 'administrator', description: 'адміністратор сайту'})
    readonly description: string;
}