import { IsEmail, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsEmail()  // Validasi: harus format email
  email: string;

  @IsString()  // Validasi: harus tipe string
  password: string;
}