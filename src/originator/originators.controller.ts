import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Originator } from './originator.entity.ts';
import { Category } from 'src/categories/categories.entity';

@Controller('originator')
export class OriginatorsController {
  constructor(private readonly _originatorsService: OriginatorsController) {}

  @Get()
  findAll(): Originator[] {
    return this._originatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Originator | null {
    return this._originatorsService.findOne(id);
  }

  @Post()
  create(
    @Body('longName') longName: string,
    @Body('shortName') shortName: string,
    @Body('category') category: Category,
  ): Originator {
    return this._originatorsService.create(longName, shortName, category);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<Originator>,
  ): Originator | null {
    return this._originatorsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this._originatorsService.remove(id);
  }
}
