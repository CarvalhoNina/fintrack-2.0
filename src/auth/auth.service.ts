import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly _usersService: UsersService,
    private readonly _jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this._usersService.findByEmail(email);

    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);

      if (isMatch) {
        const userObject = user.toObject();

        const { password: _, ...result } = userObject;

        return result;
      }
    }

    throw new UnauthorizedException('E-mail ou senha incorretos.');
  }

  login(user: Record<string, any>) {
    const payload = {
      email: user.email as string,
      sub: (user._id as string).toString(),
    };

    return {
      access_token: this._jwtService.sign(payload),
    };
  }
}
