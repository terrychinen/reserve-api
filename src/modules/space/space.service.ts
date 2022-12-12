import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Space } from './entities/space.entity';
import { CreateSpaceDto } from './dtos/create-space.dto';
import { UpdateSpaceDto } from './dtos/update-space.dto';

@Injectable()
export class SpaceService {
  constructor(
    @InjectRepository(Space)
    private readonly _spaceRepository: Repository<Space>,
  ) {}

  async findAll(): Promise<Space[]> {
    return this._spaceRepository.find();
  }

  async findOne(id: number): Promise<Space> {
    const space = await this._spaceRepository.findOneBy({ id });
    if (!space) {
      throw new NotFoundException(`Space with id "${id} not found"`);
    }

    return space;
  }

  async create(createSpaceDto: CreateSpaceDto): Promise<Space> {
    return await this._spaceRepository.save(createSpaceDto);
  }

  async update(id: number, updateSpaceDto: UpdateSpaceDto): Promise<Space> {
    const toUpdate = await this.findOne(id);
    const updatedSpace = Object.assign(toUpdate, updateSpaceDto);
    return await this._spaceRepository.save(updatedSpace);
  }

  async remove(id: number): Promise<Space> {
    const space = await this.findOne(id);
    return this._spaceRepository.remove(space);
  }
}
