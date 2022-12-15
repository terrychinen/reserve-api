import { IsString, MinLength, IsDateString } from 'class-validator';

export class CreateRequestDto {
  @IsString()
  @MinLength(5)
  name: string;

  @IsString()
  @MinLength(5)
  position: string;

  @IsString()
  @MinLength(5)
  section: string;

  @IsString()
  @MinLength(5)
  phone: string;

  @IsString()
  @MinLength(5)
  email: string;

  @IsString()
  @MinLength(5)
  type: string;

  @IsString()
  @MinLength(5)
  activityName: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  @IsString()
  day: string;

  @IsString()
  startHour: string;

  @IsString()
  endHour: string;
}
