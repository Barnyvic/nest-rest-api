import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessagesDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  async listMessages() {
    const data = await this.messagesService.findAll();
    if (!data) throw new NotFoundException('Message not found');
    return data;
  }

  @Post()
  createMessage(@Body() createMessge: CreateMessagesDto) {
    return this.messagesService.create(createMessge);
  }

  @Get('/:id')
  async listMessagesById(@Param('id') id: string) {
    const data = await this.messagesService.findOne(id);
    if (!data) throw new NotFoundException('Message not found');
    return data;
  }
}
