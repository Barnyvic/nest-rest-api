import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemsDTO } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './items.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemService.findOne(id);
  }
  @Post()
  async createItem(@Body() createItemDto: CreateItemsDTO): Promise<Item> {
    return this.itemService.createItem(createItemDto);
  }
  @Put(':id')
  async updateItem(
    @Body() updateItemDto: CreateItemsDTO,
    @Param('id') id,
  ): Promise<Item> {
    return this.itemService.UpdateItem(id, updateItemDto);
  }
  @Delete(':id')
  deleteItem(@Param('id') id): Promise<Item> {
    return this.itemService.deleteItem(id);
  }
}
