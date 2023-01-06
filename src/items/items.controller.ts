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

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Okay baby I am working';
  }
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }
  @Post()
  createItem(@Body() createItemDto: CreateItemsDTO): string {
    return `Name: ${createItemDto.name}, Description: ${createItemDto.description},Quantity: ${createItemDto.qty}`;
  }
  @Put('id')
  updateItem(@Body() updateItemDto: CreateItemsDTO, @Param('id') id): string {
    return `Update Item ${id} - Name: ${updateItemDto.name}, Description: ${updateItemDto.description},Quantity: ${updateItemDto.qty}`;
  }
  @Delete('id')
  deleteItem(@Param('id') id): string {
    return `Delete Item ${id}`;
  }
}
