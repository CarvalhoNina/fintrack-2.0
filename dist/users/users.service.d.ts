import { UsersRepository } from './users.repository';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { UserDocument } from './user.schema';
export declare class UsersService {
    private readonly _usersRepository;
    constructor(_usersRepository: UsersRepository);
    create(dto: CreateUserDto): Promise<UserDocument>;
    findAll(): Promise<UserDocument[]>;
    findOne(id: string): Promise<UserDocument>;
    update(id: string, dto: UpdateUserDto): Promise<UserDocument>;
    remove(id: string): Promise<boolean>;
}
