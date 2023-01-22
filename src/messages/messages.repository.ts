import { readFile, writeFile } from 'fs/promises';

export class messagesRepository {
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

  async create(message: string) {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);

    const id = Math.round(Math.random() * 999);
    messages[id] = { id, message };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
