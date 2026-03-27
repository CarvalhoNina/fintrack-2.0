import { OriginatorDocument } from './originator.schema';
import { Model } from 'mongoose';
import { CreateOriginatorDto } from './DTO/create-originator.dto';
import { UpdateOriginatorDto } from './DTO/update-originator.dto';
export declare class OriginatorsRepository {
    private readonly _originatorModel;
    constructor(_originatorModel: Model<OriginatorDocument>);
    save(dto: CreateOriginatorDto): Promise<OriginatorDocument>;
    findAll(): Promise<OriginatorDocument[]>;
    findById(id: string): Promise<OriginatorDocument | null>;
    update(id: string, dto: UpdateOriginatorDto): Promise<OriginatorDocument | null>;
    delete(id: string): Promise<boolean>;
}
