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
import { Category } from './categories.entity';
import { CreateCategoryDto } from './DTO/create-category.dto';
import { UpdateCategoryDto } from './DTO/update-category.dto';

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
  create(@Body() createCategoryDto: CreateCategoryDto): Category {
    return this._categoriesService.create(createCategoryDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDTO: UpdateCategoryDto,
  ): Category | null {
    return this._categoriesService.update(id, updateCategoryDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this._categoriesService.remove(id);
  }
}
