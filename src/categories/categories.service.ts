import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { Category } from './categories.entity';
import { CategoryType } from './categories.entity';
import { CategorySubtype } from './categories.entity';

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

  create(type: CategoryType, subtype: CategorySubtype): Category {
    const newCategory = new Category({
      type,
      subtype,
    });

    return this._categoriesRepository.save(newCategory);
  }

  remove(id: string): boolean {
    const category = this._categoriesRepository.findById(id);

    if (!category) {
      return false;
    }

    return this._categoriesRepository.delete(id);
  }

  update(id: string, data: Partial<Category>): Category | null {
    const category = this.findOne(id);

    if (!category) {
      return null;
    }

    Object.assign(category, data);

    return this._categoriesRepository.save(category);
  }
}
