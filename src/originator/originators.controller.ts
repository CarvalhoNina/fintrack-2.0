import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateOriginatorDto } from './DTO/create-originator.dto.js';
import { UpdateOriginatorDto } from './DTO/update-originator.dto.js';
import { OriginatorsService } from './originators.service.js';
import { Originator } from './originator.schema.js';
import { AuthGuard } from '@nestjs/passport';

@Controller('originators')
@UseGuards(AuthGuard('jwt'))
export class OriginatorsController {
  constructor(private readonly _originatorsService: OriginatorsService) {}

  @Get()
  async findAll(): Promise<Originator[]> {
    return await this._originatorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Originator | null> {
    return await this._originatorsService.findOne(id);
  }

  @Post()
  async create(
    @Body() createOriginatorDTO: CreateOriginatorDto,
  ): Promise<Originator> {
    return await this._originatorsService.create(createOriginatorDTO);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOriginatorDTO: UpdateOriginatorDto,
  ): Promise<Originator | null> {
    return await this._originatorsService.update(id, updateOriginatorDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return await this._originatorsService.remove(id);
  }
}
