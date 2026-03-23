import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Originator } from './originator.entity';
import { CreateOriginatorDto } from './DTO/create-originator.dto.js';
import { UpdateOriginatorDto } from './DTO/update-originator.dto.js';
import { OriginatorsService } from './originators.service.js';

@Controller('originator')
export class OriginatorsController {
  constructor(private readonly _originatorsService: OriginatorsService) {}

  @Get()
  findAll(): Originator[] {
    return this._originatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Originator | null {
    return this._originatorsService.findOne(id);
  }

  @Post()
  create(@Body() createOriginatorDTO: CreateOriginatorDto): Originator {
    return this._originatorsService.create(createOriginatorDTO);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOriginatorDTO: UpdateOriginatorDto,
  ): Originator | null {
    return this._originatorsService.update(id, updateOriginatorDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this._originatorsService.remove(id);
  }
}
