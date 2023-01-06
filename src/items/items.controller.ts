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
  @Get('id')
  findOne(@Param() param): string {
    return `Item ${param.id}`;
  }
  @Post()
  createItem(@Body() createItemDto: CreateItemsDTO): string {
    return `Name: ${createItemDto.name}, Description: ${createItemDto.description},Quantity: ${createItemDto.qty}`;
  }
  @Put()
  updateItem(): string {
    return 'Update Item';
  }
  @Delete()
  deleteItem(): string {
    return 'Delete Item';
  }
}
