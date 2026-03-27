import { CreateOriginatorDto } from './DTO/create-originator.dto.js';
import { UpdateOriginatorDto } from './DTO/update-originator.dto.js';
import { OriginatorsService } from './originators.service.js';
import { Originator } from './originator.schema.js';
export declare class OriginatorsController {
    private readonly _originatorsService;
    constructor(_originatorsService: OriginatorsService);
    findAll(): Promise<Originator[]>;
    findOne(id: string): Promise<Originator | null>;
    create(createOriginatorDTO: CreateOriginatorDto): Promise<Originator>;
    update(id: string, updateOriginatorDTO: UpdateOriginatorDto): Promise<Originator | null>;
    remove(id: string): Promise<boolean>;
}
