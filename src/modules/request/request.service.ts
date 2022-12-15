import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from './entities/request.entity';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private readonly _requestRepository: Repository<Request>,
  ) {}

  async findAll(): Promise<Request[]> {
    return await this._requestRepository.find();
  }

  async findOne(id: number): Promise<Request> {
    const request = await this._requestRepository.findOneBy({ id });
    if (!request) {
      throw new NotFoundException(`Request with id "${id}" not found`);
    }

    return request;
  }

  async create(createRequestDto: CreateRequestDto): Promise<Request> {
    return await this._requestRepository.save(createRequestDto);
  }

  async update(
    id: number,
    updateRequestDto: UpdateRequestDto,
  ): Promise<Request> {
    const toUpdate = await this.findOne(id);
    const updated = Object.assign(toUpdate, updateRequestDto);

    return await this._requestRepository.save(updated);
  }

  async remove(id: number): Promise<Request> {
    const request = await this.findOne(id);
    return await this._requestRepository.remove(request);
  }
}
