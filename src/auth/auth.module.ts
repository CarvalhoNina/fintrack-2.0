import { Module } from '@nestjs/common';
import { AuthService } from './auth.service'; // O import dele
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'ChaveSecretaCalgary2026',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService], // ELE PRECISA ESTAR AQUI!
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
