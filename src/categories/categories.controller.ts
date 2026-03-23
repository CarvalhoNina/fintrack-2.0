import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category, CategorySubtype, CategoryType } from './categories.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly _categoriesService: CategoriesService) {}

  @Get()
  findAll(): Category[] {
    return this._categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Category | null {
    return this._categoriesService.findOne(id);
  }

  @Post()
  create(
    @Body('type') type: CategoryType,
    @Body('subtype') subtype: CategorySubtype,
  ): Category {
    return this._categoriesService.create(type, subtype);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<Category>,
  ): Category | null {
    return this._categoriesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this._categoriesService.remove(id);
  }
}
