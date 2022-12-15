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
import { SpaceService } from './space.service';
import { Space } from './entities/space.entity';
import { CreateSpaceDto } from './dtos/create-space.dto';
import { UpdateSpaceDto } from './dtos/update-space.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('space')
@ApiTags('Space')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
export class SpaceController {
  constructor(private readonly _spaceService: SpaceService) {}

  @Get()
  async findAll(): Promise<Space[]> {
    return this._spaceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Space> {
    return this._spaceService.findOne(id);
  }

  @Post()
  async create(@Body() createSpaceDto: CreateSpaceDto): Promise<Space> {
    return this._spaceService.create(createSpaceDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSpaceDto: UpdateSpaceDto,
  ) {
    return this._spaceService.update(id, updateSpaceDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Space> {
    return this._spaceService.remove(id);
  }
}
