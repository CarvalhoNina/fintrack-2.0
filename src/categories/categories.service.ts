import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { Category } from './categories.entity';
import { CreateCategoryDto } from './DTO/create-category.dto';
import { UpdateCategoryDto } from './DTO/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly _categoriesRepository: CategoriesRepository) {}

  findAll(): Category[] {
    return this._categoriesRepository.findAll();
  }

  findOne(id: string): Category | null {
    const account = this._categoriesRepository.findById(id);

    if (!account) {
      return null;
    }

    return account;
  }

  create(dto: CreateCategoryDto): Category {
    const newCategory = new Category({
      ...dto,
    });

    return this._categoriesRepository.save(newCategory);
  }

  update(id: string, dto: UpdateCategoryDto): Category | null {
    const category = this.findOne(id);

    if (!category) {
      return null;
    }

    Object.assign(category, dto);

    return this._categoriesRepository.save(category);
  }

  remove(id: string): boolean {
    const category = this._categoriesRepository.findById(id);

    if (!category) {
      return false;
    }

    return this._categoriesRepository.delete(id);
  }
}
