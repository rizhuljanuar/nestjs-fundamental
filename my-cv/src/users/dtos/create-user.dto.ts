import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()  // Validasi: harus format email
  email: string;

  @IsString()  // Validasi: harus tipe string
  password: string;
}