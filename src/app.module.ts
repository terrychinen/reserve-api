import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './config/database-config.service';
import { RequestModule } from './modules/request/request.module';
import { ReserveModule } from './modules/reserve/reserve.module';
import { SpaceModule } from './modules/space/space.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfigService,
    }),
    RequestModule,
    ReserveModule,
    SpaceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
