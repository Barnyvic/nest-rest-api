import { readFile, writeFile } from 'fs/promises';
import { CreateMessagesDto } from './dto/create-message.dto';

export class MessagesRepository {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);
    return messages[id];
  }

  async findAll() {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);
    return messages;
  }
  async create(message: CreateMessagesDto) {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);

    const id = Math.round(Math.random() * 999);
    messages[id] = { id, message };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
