import { Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import {
  Body,
  Delete,
  Get,
  Param,
  Put,
  Query,
} from '@nestjs/common/decorators';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  createUser(@Body() createUserdto: CreateUserDto) {
    this.userService.createUser(createUserdto);
  }
  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.userService.findAll(email);
  }

  @Get('/:id')
  findUserById(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Put('/:id')
  updateUser(@Param('id') id: number, body: CreateUserDto) {
    return this.userService.updateUser(id, body);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.removeUser(id);
  }
}
