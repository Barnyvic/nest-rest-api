import { Injectable } from '@nestjs/common';
import { Item } from './items.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findById({ _id: id });
  }
  async createItem(body: Item): Promise<Item> {
    const newItem = await this.itemModel.create({
      body,
    });
    return newItem;
  }
  //   async createItem(body: Item): Promise<Item> {
  //     const newItem = new this.itemModel(body);
  //     await newItem.save();
  //     return newItem;
  //   }

  async UpdateItem(id: string, body: Item): Promise<Item> {
    const updateItem = await this.itemModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
    return updateItem;
  }

  async deleteItem(Id): Promise<Item> {
    const deletedItem = await this.itemModel.findByIdAndDelete({ _id: Id });
    return deletedItem;
  }
}
