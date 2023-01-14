import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types, UpdateQuery } from 'mongoose';
import { Item } from './items.interface';
import { CreateItemsDTO } from './dto/create-item-dto';

@Injectable()
export class ItemsRepository {
  constructor(
    @InjectModel('Item')
    private readonly itemModel: Model<Item>,
  ) {}

  public async createItems(createItemsDto: CreateItemsDTO): Promise<Item> {
    return await this.itemModel.create(createItemsDto);
  }

  public async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  public async findById(id: string) {
    return await this.itemModel.findById({ _id: id });
  }

  public async updateOne(
    id: string,
    updateQuery?: UpdateQuery<Partial<Item>>,
  ): Promise<Item> {
    const result = await this.itemModel.findOneAndUpdate(
      { _id: id },
      updateQuery,
      {
        new: true,
      },
    );
    return result;
  }

  public async remove(id: string): Promise<Item> {
    return this.itemModel.findByIdAndRemove(id);
  }
}
