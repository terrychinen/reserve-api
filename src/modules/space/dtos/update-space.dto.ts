import { CreateSpaceDto } from './create-space.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSpaceDto extends PartialType(CreateSpaceDto) {}
