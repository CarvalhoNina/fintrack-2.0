import { Injectable, NotFoundException } from '@nestjs/common';
import { OriginatorsRepository } from './originators.repository';
import { Originator } from './originator.entity';
import { UpdateOriginatorDto } from './DTO/update-originator.dto';
import { CreateOriginatorDto } from './DTO/create-originator.dto';
import { CategoriesRepository } from 'src/categories/categories.repository';

@Injectable()
export class OriginatorsService {
  constructor(
    private readonly _originatorsRepository: OriginatorsRepository,
    private readonly _categoryRepository: CategoriesRepository,
  ) {}

  findAll(): Originator[] {
    return this._originatorsRepository.findAll();
  }

  findOne(id: string): Originator | null {
    return this._originatorsRepository.findById(id) || null;
  }

  create(dto: CreateOriginatorDto): Originator {
    const category = this._categoryRepository.findById(dto.categoryId);
    if (!category) throw new NotFoundException('Categoria não encontrada');

    const newOriginator = new Originator({
      longName: dto.longName,
      shortName: dto.shortName,
      category,
    });

    return this._originatorsRepository.save(newOriginator);
  }

  update(id: string, dto: UpdateOriginatorDto): Originator | null {
    const originator = this.findOne(id);
    if (!originator) return null;

    Object.assign(originator, dto);
    return this._originatorsRepository.save(originator);
  }

  remove(id: string): boolean {
    return this._originatorsRepository.delete(id);
  }
}
