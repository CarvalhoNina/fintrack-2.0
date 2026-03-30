import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../users/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly _usersService: UsersService,
    private readonly _jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<UserDocument | null> {
    const user = await this._usersService.findByEmail(email);

    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);

      if (isMatch) {
        return user;
      }
    }

    throw new UnauthorizedException('E-mail ou senha incorretos.');
  }

  login(user: UserDocument) {
    const payload = {
      email: user.email,
      sub: user._id.toString(),
    };

    return {
      access_token: this._jwtService.sign(payload),
    };
  }
}
