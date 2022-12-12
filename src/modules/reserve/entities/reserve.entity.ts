import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Space } from '../../space/entities/space.entity';

@Entity()
export class Reserve {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '09:00 - 12:00' })
  @Column()
  hour: string;

  @ApiProperty({ example: 'Reserve for...' })
  @Column()
  description: string;

  @ApiProperty({ example: 'NestJS' })
  @Column()
  course: string;

  @ApiProperty({ example: 'Karla Lopez' })
  @Column()
  teacher: string;

  @ApiProperty({ example: 1 })
  @ManyToOne(() => Space, (space) => space.reserve, {
    onDelete: 'CASCADE',
  })
  space: number;
}
