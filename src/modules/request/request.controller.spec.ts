import { RequestController } from './request.controller';
import { TestingModule, Test } from '@nestjs/testing';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { RequestServiceMock } from './mocks/request-service.mock';

describe('RequestController', () => {
  let controller: RequestController;
  let service: RequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestController],
      providers: [RequestService, RequestServiceMock],
    })
      .overrideProvider(RequestService)
      .useClass(RequestServiceMock)
      .compile();

    controller = module.get<RequestController>(RequestController);
    service = module.get<RequestService>(RequestService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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

    expect(await controller.create(createRequestDto)).toEqual({
      id: expect.any(Number),
      ...createRequestDto,
    });
  });

  it('should update a request', async () => {
    const updateRequestDto: UpdateRequestDto = {
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

    const requestId = 1;

    expect(await controller.update(requestId, updateRequestDto)).toEqual({
      id: requestId,
      ...updateRequestDto,
    });

    const updateSpy = jest.spyOn(service, 'update');
    controller.update(requestId, updateRequestDto);

    expect(updateSpy).toHaveBeenCalledWith(requestId, updateRequestDto);
  });
});
