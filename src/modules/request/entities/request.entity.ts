import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  position: string;

  @Column('text')
  section: string;

  @Column('text')
  phone: string;

  @Column('text')
  email: string;

  @Column('text')
  type: string;

  @Column('text')
  activityName: string;

  @Column('date')
  startDate: Date;

  @Column('date')
  endDate: Date;

  @Column('text')
  day: string;

  @Column('text')
  starHour: string;

  @Column('text')
  endHour: string;
}
