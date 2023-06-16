import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { UserService } from 'src/users/user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly _userService: UserService) {}

  @Get()
  getUsers() {
    return this._userService.getAll();
  }

  @Get(':id')
  getUser(@Param('id') id) {
    return id;
  }

  @Post()
  createUser(@Body() userCreateDto: CreateUserDTO) {
    console.log(userCreateDto);
    return this._userService.createUser(userCreateDto);
  }

  @Patch('username/:id')
  updateUserName(
    @Body('username') username,
    @Res({ passthrough: true }) response: Response,
  ) {
    response.status(204);
    console.log('Username updated');
  }
}
