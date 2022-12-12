import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserve } from './entities/reserve.entity';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';

@Injectable()
export class ReserveService {
  constructor(
    @InjectRepository(Reserve)
    private readonly _reserveRepository: Repository<Reserve>,
  ) {}

  async findAll(): Promise<Reserve[]> {
    return await this._reserveRepository.find();
  }

  async findOne(id: number): Promise<Reserve> {
    const reserve = await this._reserveRepository.findOneBy({ id });
    if (!reserve) {
      throw new NotFoundException(`Reserve with id "${id}" not found`);
    }

    return reserve;
  }

  async create(createReserveDto: CreateReserveDto): Promise<Reserve> {
    return await this._reserveRepository.save(createReserveDto);
  }

  async update(id: number, updateReserveDto: UpdateReserveDto) {
    const toUpdate = await this.findOne(id);
    const updatedReserve = Object.assign(toUpdate, updateReserveDto);

    return await this._reserveRepository.save(updatedReserve);
  }

  async remove(id: number) {
    const reserve = await this.findOne(id);
    return await this._reserveRepository.delete(reserve);
  }
}
