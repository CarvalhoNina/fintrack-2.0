import { UsersRepository } from './users.repository';
import { CreateUserDto } from './DTO/create-user.dto';
import { UserDocument } from './user.schema';
import { UpdateUserDto } from './DTO/update-user.dto';
export declare class UsersService {
    private readonly _usersRepository;
    constructor(_usersRepository: UsersRepository);
    create(dto: CreateUserDto): Promise<UserDocument>;
    findAll(): Promise<UserDocument[]>;
    findOne(id: string): Promise<UserDocument>;
    findByEmail(email: string): Promise<UserDocument | null>;
    update(id: string, dto: UpdateUserDto): Promise<UserDocument>;
    remove(id: string): Promise<boolean>;
}
