import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reserve } from '../../reserve/entities/reserve.entity';

@Entity()
export class Space {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Building 1' })
  @Column('text')
  place: string;

  @ApiProperty({ example: 'Room 5' })
  @Column('text')
  room: string;

  @ApiProperty({ example: '2022-05-19' })
  @Column('text')
  date: string;

  @ApiProperty()
  @OneToMany(() => Reserve, (reserve) => reserve.space, {
    eager: true,
    cascade: true,
  })
  reserve: Reserve[];
}
