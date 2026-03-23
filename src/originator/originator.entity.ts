import { Category } from 'src/categories/categories.entity';

export class Originator {
  id: string;
  longName: string;
  shortName: string;
  category: Category;

  constructor(partial: Partial<Originator>) {
    Object.assign(this, partial);
  }
}
