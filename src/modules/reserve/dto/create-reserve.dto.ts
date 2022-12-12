import { IsString, IsNumber } from 'class-validator';

export class CreateReserveDto {
  @IsString()
  hour: string;

  @IsString()
  description: string;

  @IsString()
  course: string;

  @IsString()
  teacher: string;

  @IsNumber()
  space: number;
}
