import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './DTO/create-category.dto';
import { UpdateCategoryDto } from './DTO/update-category.dto';
import { Category } from './categories.schema';
export declare class CategoriesService {
    private readonly _categoriesRepository;
    constructor(_categoriesRepository: CategoriesRepository);
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category | null>;
    create(dto: CreateCategoryDto): Promise<Category>;
    update(id: string, dto: UpdateCategoryDto): Promise<Category | null>;
    remove(id: string): Promise<boolean>;
}
