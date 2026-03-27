import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './DTO/create-category.dto';
import { UpdateCategoryDto } from './DTO/update-category.dto';
import { Category } from './categories.schema';
export declare class CategoriesController {
    private readonly _categoriesService;
    constructor(_categoriesService: CategoriesService);
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category | null>;
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    update(id: string, updateCategoryDTO: UpdateCategoryDto): Promise<Category | null>;
    remove(id: string): Promise<boolean>;
}
