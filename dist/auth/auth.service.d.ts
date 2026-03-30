import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../users/user.schema';
export declare class AuthService {
    private readonly _usersService;
    private readonly _jwtService;
    constructor(_usersService: UsersService, _jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<UserDocument | null>;
    login(user: UserDocument): {
        access_token: string;
    };
}
