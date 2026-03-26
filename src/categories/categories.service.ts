import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './DTO/create-category.dto';
import { UpdateCategoryDto } from './DTO/update-category.dto';
import { Category } from './categories.schema';

@Injectable()
export class CategoriesService {
  constructor(private readonly _categoriesRepository: CategoriesRepository) {}

  async findAll(): Promise<Category[]> {
    return await this._categoriesRepository.findAll();
  }

  async findOne(id: string): Promise<Category | null> {
    const category = await this._categoriesRepository.findById(id);
    if (!category) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada`);
    }
    return category;
  }

  async create(dto: CreateCategoryDto): Promise<Category> {
    return await this._categoriesRepository.save(dto);
  }

  async update(id: string, dto: UpdateCategoryDto): Promise<Category | null> {
    await this.findOne(id);

    const updatedCategory = await this._categoriesRepository.update(id, dto);

    if (!updatedCategory) {
      throw new NotFoundException(`Erro ao atualizar a categoria com ID ${id}`);
    }

    return updatedCategory;
  }

  async remove(id: string): Promise<boolean> {
    await this.findOne(id);
    return await this._categoriesRepository.delete(id);
  }
}
