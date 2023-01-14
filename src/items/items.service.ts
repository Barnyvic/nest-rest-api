import { Injectable } from '@nestjs/common';
import { Item } from './items.interface';
import { ItemsRepository } from './items-repository';
import { ItemSchema } from './Schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  async findAll(): Promise<Item[]> {
    return await this.itemsRepository.findAll();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemsRepository.findById(id);
  }
  async createItem(body: Item): Promise<Item> {
    const newItem = await this.itemsRepository.createItems(body);
    return newItem;
  }

  async UpdateItem(id: string, body: Item): Promise<Item> {
    const updateItem = await this.itemsRepository.updateOne(id, body);
    return updateItem;
  }

  async deleteItem(id: string): Promise<Item> {
    const deletedItem = await this.itemsRepository.remove(id);
    return deletedItem;
  }
}
