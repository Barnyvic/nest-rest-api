import {
  BadRequestException,
  Controller,
  NotFoundException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import {
  Body,
  Delete,
  Get,
  Param,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common/decorators';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-users.dto';
import { Serialize } from 'src/interceptors/serialize.interceptors';
import { UserDto } from './dto/user.dto';

@Controller('auth')
@Serialize(UserDto) // used  exclude  some object from showing in the browser
export class UsersController {
  constructor(private userService: UsersService) {}

  // create user account
  @Post('/signup')
  async createUser(@Body() createUserdto: CreateUserDto) {
    const user = await this.userService.findOneByEmail(createUserdto.email);
    if (user) {
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Email Already In Use',
      });
    } else if (!user) {
      this.userService.createUser(createUserdto);
    }
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.userService.findAll(email);
  }

  // @Serialize(UserDto) // used  exclude  some object from showing in the browser
  @Get('/:id')
  async findUserById(@Param('id') id: string) {
    const result = await this.userService.findOne(parseInt(id));
    if (!result) throw new NotFoundException('Data not found');
    return result;
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.updateUser(parseInt(id), body);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.removeUser(parseInt(id));
  }
}
