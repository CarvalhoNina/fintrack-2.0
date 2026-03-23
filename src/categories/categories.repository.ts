import { Injectable } from '@nestjs/common';
import { Category } from './categories.entity';

@Injectable()
export class CategoriesRepository {
  private readonly _categories: Category[] = [];

  save(category: Category): Category {
    if (!category.id) {
      category.id = Math.random().toString(36).substring(7);
      this._categories.push(category);
    } else {
      const index = this._categories.findIndex((c) => c.id === category.id);
      if (index !== -1) {
        this._categories[index] = category;
      }
    }
    return category;
  }

  findAll(): Category[] {
    return [...this._categories];
  }

  findById(id: string): Category | undefined {
    return this._categories.find((t) => t.id === id);
  }

  delete(id: string): boolean {
    const index = this._categories.findIndex((t) => t.id === id);

    if (index === -1) {
      return false;
    }

    this._categories.splice(index, 1);

    return true;
  }
}
