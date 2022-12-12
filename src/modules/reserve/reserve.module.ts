import { Module } from '@nestjs/common';
import { ReserveController } from './reserve.controller';
import { ReserveService } from './reserve.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserve } from './entities/reserve.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reserve])],
  controllers: [ReserveController],
  providers: [ReserveService],
  exports: [TypeOrmModule],
})
export class ReserveModule {}
