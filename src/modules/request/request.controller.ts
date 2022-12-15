import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Request } from './entities/request.entity';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('request')
@ApiTags('Request')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
export class RequestController {
  constructor(private readonly _requestService: RequestService) {}

  @Get()
  findAll(): Promise<Request[]> {
    return this._requestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Request> {
    return this._requestService.findOne(+id);
  }

  @Post()
  create(@Body() createRequestDto: CreateRequestDto): Promise<Request> {
    return this._requestService.create(createRequestDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRequestDto: UpdateRequestDto,
  ): Promise<Request> {
    return this._requestService.update(+id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<Request> {
    return this._requestService.remove(id);
  }
}
