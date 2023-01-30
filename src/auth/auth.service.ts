import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from 'src/users/dto/createUser.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signUp(body: CreateUserDto) {
    const users = await this.userService.findAll(body.email);
    if (users.length) {
      throw new BadRequestException('Email in use');
    }
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(body.password, salt);
    const verified = { email: body.email, password: hash };
    const user = await this.userService.createUser(verified);
    return user;
  }

  //   async saltPassword(
  //     password: string,
  //   ): Promise<{ salt: string; hash: string }> {
  //     const salt = await bcrypt.genSalt();
  //     const hash = await bcrypt.hash(password, salt);
  //     return { hash, salt };
  //   }
}
