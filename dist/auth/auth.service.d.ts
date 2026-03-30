import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly _usersService;
    private readonly _jwtService;
    constructor(_usersService: UsersService, _jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: Record<string, any>): {
        access_token: string;
    };
}
