import { Injectable, NotFoundException } from '@nestjs/common';
import { OriginatorsRepository } from './originators.repository';
import { UpdateOriginatorDto } from './DTO/update-originator.dto';
import { CreateOriginatorDto } from './DTO/create-originator.dto';
import { CategoriesRepository } from 'src/categories/categories.repository';
import { Originator } from './originator.schema';

@Injectable()
export class OriginatorsService {
  constructor(
    private readonly _originatorsRepository: OriginatorsRepository,
    private readonly _categoriesRepository: CategoriesRepository,
  ) {}

  async findAll(): Promise<Originator[]> {
    return await this._originatorsRepository.findAll();
  }

  async findOne(id: string): Promise<Originator | null> {
    const originator = await this._originatorsRepository.findById(id);
    if (!originator) {
      throw new NotFoundException(`Originator com ID ${id} não encontrado`);
    }
    return originator;
  }

  async create(dto: CreateOriginatorDto): Promise<Originator> {
    const category = await this._categoriesRepository.findById(dto.categoryId);
    if (!category) {
      throw new NotFoundException(`A categoria informada não existe`);
    }

    return await this._originatorsRepository.save(dto);
  }

  async update(
    id: string,
    dto: UpdateOriginatorDto,
  ): Promise<Originator | null> {
    await this.findOne(id);
    const newCategoryIdProvided = dto.categoryId;

    if (newCategoryIdProvided) {
      const categoryFoundInDb = await this._categoriesRepository.findById(
        newCategoryIdProvided,
      );

      const categoryExists = categoryFoundInDb !== null;

      if (!categoryExists) {
        throw new NotFoundException(
          `Update cancelled: The category ID '${newCategoryIdProvided}' was not found in the system.`,
        );
      }
    }

    return await this._originatorsRepository.update(id, dto);
  }

  async remove(id: string): Promise<boolean> {
    await this.findOne(id);
    return this._originatorsRepository.delete(id);
  }
}
