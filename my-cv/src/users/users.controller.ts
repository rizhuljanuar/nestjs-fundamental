import { Controller, Post, Get, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // CREATE: Buat user baru
  @Post('signup')
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return 'this action create a user';
  }

  // FIND ONE: Cari user by ID
  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  // FIND: Cari users by email
  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  // UPDATE: Update user
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() body: Partial<User>) {
    return this.usersService.update(parseInt(id), body);
  }

  // DELETE: Hapus user
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
}