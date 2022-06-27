import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Baiacu',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'Baiacu@peixes.com',
  })
  email: string;
}
