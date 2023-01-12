import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateItemsDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly qty: number;
}
