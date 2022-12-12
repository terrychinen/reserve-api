import { IsString } from 'class-validator';

export class CreateSpaceDto {
  @IsString()
  place: string;

  @IsString()
  room: string;

  @IsString()
  date: string;
}
