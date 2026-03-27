import { CategoryDocument } from './categories.schema';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './DTO/create-category.dto';
import { UpdateCategoryDto } from './DTO/update-category.dto';
export declare class CategoriesRepository {
    private readonly _categoryModel;
    constructor(_categoryModel: Model<CategoryDocument>);
    save(dto: CreateCategoryDto): Promise<CategoryDocument>;
    findAll(): Promise<CategoryDocument[]>;
    findById(id: string): Promise<CategoryDocument | null>;
    update(id: string, dto: UpdateCategoryDto): Promise<CategoryDocument | null>;
    delete(id: string): Promise<boolean>;
}
