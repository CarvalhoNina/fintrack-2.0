import { PartialType } from '@nestjs/mapped-types';
import { CreateOriginatorDto } from './create-originator.dto';

export class UpdateOriginatorDto extends PartialType(CreateOriginatorDto) {}
