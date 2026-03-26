import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './categories.schema';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './DTO/create-category.dto';
import { UpdateCategoryDto } from './DTO/update-category.dto';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectModel(Category.name)
    private readonly _categoryModel: Model<CategoryDocument>,
  ) {}

  async save(dto: CreateCategoryDto): Promise<CategoryDocument> {
    const createdCategory = new this._categoryModel(dto);
    return await createdCategory.save();
  }

  async findAll(): Promise<CategoryDocument[]> {
    return await this._categoryModel.find().exec();
  }

  async findById(id: string): Promise<CategoryDocument | null> {
    return await this._categoryModel.findById(id).exec();
  }

  async update(
    id: string,
    dto: UpdateCategoryDto,
  ): Promise<CategoryDocument | null> {
    return this._categoryModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this._categoryModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
