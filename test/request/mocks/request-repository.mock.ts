import { Request } from '../../../src/modules/request/entities/request.entity';

export class RequestRepositoryMock {
  mockRequest: Request = {
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

  find(): Promise<Request[]> {
    return Promise.resolve([this.mockRequest]);
  }

  findOneBy({ id }): Promise<Request> {
    return Promise.resolve(this.mockRequest);
  }

  save(request: Request): Promise<Request> {
    return Promise.resolve(this.mockRequest);
  }

  remove() {
    return Promise.resolve(this.mockRequest);
  }
}
