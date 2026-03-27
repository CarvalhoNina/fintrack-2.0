import { UsersService } from './users.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { UserDocument } from './user.schema';
export declare class UsersController {
    private readonly _usersService;
    constructor(_usersService: UsersService);
    findAll(): Promise<UserDocument[]>;
    findOne(id: string): Promise<UserDocument | null>;
    create(createUserDTO: CreateUserDto): Promise<UserDocument>;
    update(id: string, dto: UpdateUserDto): Promise<UserDocument | null>;
    remove(id: string): Promise<boolean>;
}
