import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { UserEntity } from './users/users.entity';
import { ReportEntity } from './reports/reports.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      synchronize: true,
      entities: [UserEntity, ReportEntity],
      database: 'db.sqlite',
    }),
    UsersModule,
    ReportsModule,
    AuthModule,
  ],
})
export class AppModule {}
