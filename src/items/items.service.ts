import { Injectable } from '@nestjs/common';
import { Item } from './items.interface';

@Injectable()
export class ItemsService {
  private readonly Items: Item[] = [
    {
      id: '1273782',
      name: 'Barny Victor',
      description: 'this is just a demo',
      qty: 1,
    },
  ];
}
