import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { RequestModule } from '../src/modules/request/request.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AuthGuard } from '@nestjs/passport';
import { Request } from '../src/modules/request/entities/request.entity';
import { RequestRepositoryMock } from './request/mocks/request-repository.mock';

describe('RequestController (e2e)', () => {
  let app: INestApplication;
  const requestObject: Request = {
    id: 0,
    name: '',
    position: '',
    section: '',
    phone: '',
    email: '',
    type: '',
    activityName: '',
    startDate: undefined,
    endDate: undefined,
    day: '',
    startHour: '',
    endHour: '',
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RequestModule],
    })
      .overrideGuard(AuthGuard('jwt'))
      .useValue('')
      .overrideProvider(getRepositoryToken(Request))
      .useClass(RequestRepositoryMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/request (GET)', async () => {
    return request(app.getHttpServer()).get('/request').expect(200);
  });

  it('/request/1 (GET)', async () => {
    return request(app.getHttpServer()).get('/request/1').expect(200);
  });

  it('/request (POST)', async () => {
    return request(app.getHttpServer()).post('/request').expect(201);
  });

  it('/request/1 (PATCH)', async () => {
    return request(app.getHttpServer()).patch('/request/1').expect(200);
  });

  it('/request/1 (DELETE)', async () => {
    return request(app.getHttpServer()).delete('/request/1').expect(200);
  });
});
