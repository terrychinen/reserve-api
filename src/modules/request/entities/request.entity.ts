import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Request {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Luis Torres' })
  @Column('text')
  name: string;

  @ApiProperty({ example: 'Software engineer' })
  @Column('text')
  position: string;

  @ApiProperty({ example: 'IT Area' })
  @Column('text')
  section: string;

  @ApiProperty({ example: '999888777' })
  @Column('text')
  phone: string;

  @ApiProperty({ example: 'luis@test.com' })
  @Column('text')
  email: string;

  @ApiProperty({ example: 'Developer' })
  @Column('text')
  type: string;

  @ApiProperty({ example: 'study group' })
  @Column('text')
  activityName: string;

  @ApiProperty({ example: '2022-10-12' })
  @Column('date')
  startDate: Date;

  @ApiProperty({ example: '2022-12-12' })
  @Column('date')
  endDate: Date;

  @ApiProperty({ example: 'Monday' })
  @Column('text')
  day: string;

  @ApiProperty({ example: '10' })
  @Column('text')
  starHour: string;

  @ApiProperty({ example: '12' })
  @Column('text')
  endHour: string;
}
