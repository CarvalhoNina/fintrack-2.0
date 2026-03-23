import { Injectable } from '@nestjs/common';
import { OriginatorsRepository } from './originators.repository';
import { Originator } from './originator.entity.ts';
import { Category } from 'src/categories/categories.entity';

@Injectable()
export class OriginatorsService {
  constructor(private readonly _originatorsRepository: OriginatorsRepository) {}

  findAll(): Originator[] {
    return this._originatorsRepository.findAll();
  }

  findOne(id: string): Originator | null {
    return this._originatorsRepository.findById(id) || null;
  }

  create(longName: string, shortName: string, category: Category): Originator {
    const newOriginator = new Originator({
      longName,
      shortName,
      category,
    });

    return this._originatorsRepository.save(newOriginator);
  }

  update(id: string, data: Partial<Originator>): Originator | null {
    const originator = this.findOne(id);
    if (!originator) return null;

    Object.assign(originator, data);
    return originator;
  }

  remove(id: string): boolean {
    return this._originatorsRepository.delete(id);
  }
}
