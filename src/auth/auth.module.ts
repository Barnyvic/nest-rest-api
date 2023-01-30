import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/users.entity';

@Module({
  providers: [AuthService, UsersService],
  imports: [TypeOrmModule.forFeature([UserEntity])],
})
export class AuthModule {}
