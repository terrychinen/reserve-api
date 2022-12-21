import { CreateRequestDto } from '../dto/create-request.dto';
import { UpdateRequestDto } from '../dto/update-request.dto';
import { Request } from '../entities/request.entity';

export class RequestServiceMock {
  request: Request = {
    id: 1,
    name: 'Carlos Torres',
    position: 'Software engineer',
    section: 'IT Area',
    phone: '999888111',
    email: 'carlos@test.com',
    type: 'Developer',
    activityName: 'Study Group',
    startDate: new Date('2022-12-15'),
    endDate: new Date('2022-12-18'),
    day: 'Monday',
    startHour: '5',
    endHour: '9',
  };

  async findAll(): Promise<Request[]> {
    return Promise.resolve([this.request]);
  }

  async findOne(id: number): Promise<Request> {
    return Promise.resolve({ ...this.request });
  }

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

  async remove(): Promise<Request> {
    return Promise.resolve({ ...this.request });
  }
}
