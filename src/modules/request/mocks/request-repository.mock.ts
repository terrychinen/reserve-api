import { Request } from '../entities/request.entity';

export class RequestRepositoryMock {
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

  save(request: Request) {
    return Promise.resolve({
      id: Math.floor(Math.random() * (1000 - 1) + 1),
      ...request,
    });
  }

  find(): Promise<Request[]> {
    return Promise.resolve([this.request]);
  }

  findOneBy({ id: requestId }): Promise<Request> {
    const requestFind = this.request;
    requestFind.id = requestId;
    return Promise.resolve({ ...requestFind });
  }

  remove(id: number): Promise<Request> {
    return Promise.resolve({ ...this.request });
  }
}
