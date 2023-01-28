import { MessagesRepository } from './messages.repository';
import { CreateMessagesDto } from './dto/create-message.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(public messageRepository: MessagesRepository) {}

  async findOne(id: string) {
    return await this.messageRepository.findOne(id);
  }

  async findAll() {
    return await this.messageRepository.findAll();
  }

  async create(craeteMessage: CreateMessagesDto) {
    return await this.messageRepository.create(craeteMessage);
  }
}
