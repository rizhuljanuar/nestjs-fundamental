import { Controller, Post, Get, Patch, Delete, Body, Param, Query, Session } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { UserDTO } from './dtos/user.dto';
import { Serialize } from 'src/seriallize/serialize.interceptor';
import { AuthService } from './auth.service';

@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  // CREATE: Buat user baru
  @Post('signup')
  @Serialize(UserDTO)
  async createUser(@Body() body: CreateUserDTO) {
    const user = await this.authService.signup(
      body.email,
      body.password
    );

    return user;
  }

  @Post('/signin')
  @Serialize(UserDTO)
  async signin(@Body() body: CreateUserDTO) {
    const user = await this.authService.signin(
      body.email,
      body.password
    );

    return user;
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
  updateUser(@Param('id') id: string, @Body() attrs: UpdateUserDTO) {
    return this.usersService.update(parseInt(id), attrs);
  }

  // DELETE: Hapus user
  @Delete(':id')
  @Serialize(UserDTO)
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
}