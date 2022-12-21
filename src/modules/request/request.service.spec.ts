import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Request } from './entities/request.entity';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { RequestRepositoryMock } from './mocks/request-repository.mock';

describe('RequestService', () => {
  let service: RequestService;

  const request: Request = {
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RequestService,
        {
          provide: getRepositoryToken(Request),
          useClass: RequestRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<RequestService>(RequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find All requests', async () => {
    expect(await service.findAll()).toEqual([request]);
  });

  it('should find a request', async () => {
    const requestId = 1;
    return expect(await service.findOne(requestId)).toEqual({ ...request });
  });

  it('should create a request', async () => {
    const createRequestDto: CreateRequestDto = {
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

    expect(await service.create(createRequestDto)).toEqual({
      id: expect.any(Number),
      ...createRequestDto,
    });
  });

  it('should update a request', async () => {
    const updateRequestDto: UpdateRequestDto = {
      name: 'Luis Sanchez',
      position: 'Movile designer',
      section: 'UX',
      phone: '999888111',
      email: 'carlos@test.com',
      type: 'designer',
      activityName: 'Study Group',
      startDate: null,
      endDate: null,
      day: 'Monday',
      startHour: '5',
      endHour: '9',
    };

    const requestId = 1;

    expect(await service.update(requestId, updateRequestDto)).toEqual({
      id: requestId,
      ...updateRequestDto,
    });
  });

  it('should remove a request', async () => {
    const requestId = 1;
    expect(await service.remove(requestId)).toEqual({ ...request });
  });
});
