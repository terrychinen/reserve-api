import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Reserve } from './entities/reserve.entity';
import { ReserveService } from './reserve.service';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';

@Controller('reserve')
export class ReserveController {
  constructor(private readonly _reserveService: ReserveService) {}

  @Get()
  findAll(): Promise<Reserve[]> {
    return this._reserveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Reserve> {
    return this._reserveService.findOne(id);
  }

  @Post()
  create(@Body() createReserveDto: CreateReserveDto): Promise<Reserve> {
    return this._reserveService.create(createReserveDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReserveDto: UpdateReserveDto,
  ) {
    return this._reserveService.update(id, updateReserveDto);
  }

  @Delete(':id')
  remove(@Param(':id', ParseIntPipe) id: number) {
    return this._reserveService.remove(id);
  }
}
