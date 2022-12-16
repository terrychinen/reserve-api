import { CreateRequestDto } from '../dto/create-request.dto';
import { UpdateRequestDto } from '../dto/update-request.dto';
import { Request } from '../entities/request.entity';

export class RequestServiceMock {
  async create(createRequestDto: CreateRequestDto): Promise<Request> {
    return Promise.resolve({
      id: Math.floor(Math.random() * (1000 - 1) + 1),
      ...createRequestDto,
    }) as Promise<Request>;
  }

  async update(
    id: number,
    updateRequestDto: UpdateRequestDto,
  ): Promise<Request> {
    return Promise.resolve({
      id,
      ...updateRequestDto,
    }) as Promise<Request>;
  }
}
