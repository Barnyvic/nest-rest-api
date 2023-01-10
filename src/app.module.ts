import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { Congif } from './Config/config';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(Congif.MongoURL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
