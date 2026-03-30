import { AuthService } from './auth.service';
import { LoginDto } from './auth.loginDto';
export declare class AuthController {
    private readonly _authService;
    constructor(_authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
