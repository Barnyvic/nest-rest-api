import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessagesDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() createMessge: CreateMessagesDto) {
    console.log(createMessge);
  }

  @Get('/:id')
  listMessagesById(@Param('id') id: string) {
    console.log(id);
  }
}
