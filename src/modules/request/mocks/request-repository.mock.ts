import { Request } from '../entities/request.entity';

export class RequestRepositoryMock {
  save(request: Request) {
    return Promise.resolve({
      id: Math.floor(Math.random() * (1000 - 1) + 1),
      ...request,
    });
  }

  findOneBy({ id: requestId }): Promise<Request> {
    return Promise.resolve({
      id: requestId,
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
    });
  }
}
