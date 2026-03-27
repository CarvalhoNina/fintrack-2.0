import { OriginatorsRepository } from './originators.repository';
import { UpdateOriginatorDto } from './DTO/update-originator.dto';
import { CreateOriginatorDto } from './DTO/create-originator.dto';
import { CategoriesRepository } from 'src/categories/categories.repository';
import { Originator } from './originator.schema';
export declare class OriginatorsService {
    private readonly _originatorsRepository;
    private readonly _categoriesRepository;
    constructor(_originatorsRepository: OriginatorsRepository, _categoriesRepository: CategoriesRepository);
    findAll(): Promise<Originator[]>;
    findOne(id: string): Promise<Originator | null>;
    create(dto: CreateOriginatorDto): Promise<Originator>;
    update(id: string, dto: UpdateOriginatorDto): Promise<Originator | null>;
    remove(id: string): Promise<boolean>;
}
