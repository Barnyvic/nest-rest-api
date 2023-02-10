import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private repository: Repository<UserEntity>,
  ) {}

  async createUser(body: CreateUserDto) {
    const user = this.repository.create(body);
    return this.repository.save(user);
  }

  findOne(id: number) {
    if(!id) return null;
    const user = this.repository.findOne({ where: { id: id } });
    return user;
  }

  findAll(email: string) {
    return this.repository.find({ where: { email: email } });
  }

  async updateUser(id: number, attribute: Partial<UserEntity>) {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException(`User not found`);
    }
    Object.assign(user, attribute);
    return this.repository.save(user);
  }

  async removeUser(id: number) {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.repository.remove(user);
  }
}
