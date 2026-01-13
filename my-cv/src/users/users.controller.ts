import { Controller, Post, Get, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDTO } from './dtos/user.dto';
import { Serialize } from 'src/seriallize/serialize.interceptor';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // CREATE: Buat user baru
  @Post('signup')
  @Serialize(UserDTO)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(
      createUserDto.email,
      createUserDto.password
    );
  }

  // FIND ONE: Cari user by ID
  @Get(':id')
  @Serialize(UserDTO)
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  // FIND: Cari users by email
  @Get()
  @Serialize(UserDTO)
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  // UPDATE: Update user
  @Patch(':id')
  @Serialize(UserDTO)
  updateUser(@Param('id') id: string, @Body() attrs: UpdateUserDto) {
    return this.usersService.update(parseInt(id), attrs);
  }

  // DELETE: Hapus user
  @Delete(':id')
  @Serialize(UserDTO)
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
}