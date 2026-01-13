import { Controller, Post, Get, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // CREATE: Buat user baru
  @Post('signup')
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return this.usersService.create(
      createUserDto.email,
      createUserDto.password
    );
  }

  // FIND ONE: Cari user by ID
  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  // FIND: Cari users by email
  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  // UPDATE: Update user
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() attrs: UpdateUserDto) {
    return this.usersService.update(parseInt(id), attrs);
  }

  // DELETE: Hapus user
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
}