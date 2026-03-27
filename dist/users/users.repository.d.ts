import { UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
export declare class UsersRepository {
    private readonly _userModel;
    constructor(_userModel: Model<UserDocument>);
    save(dto: CreateUserDto): Promise<UserDocument>;
    findAll(): Promise<UserDocument[]>;
    findById(id: string): Promise<UserDocument | null>;
    update(id: string, dto: UpdateUserDto): Promise<UserDocument | null>;
    delete(id: string): Promise<boolean>;
}
