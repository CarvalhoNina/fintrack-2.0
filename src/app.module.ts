import { Module } from '@nestjs/common';
import { TransactionModule } from './transaction/transaction.module';
import { AccountsModule } from './accounts/accounts.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OriginatorsModule } from './originator/originator.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get<string>('DATABASE_URL');
        console.log('Sua URI no ENV é:', uri); // Isso vai imprimir no terminal
        return {
          uri: uri || 'mongodb://127.0.0.1:27017/fintrack_novo',
        };
      },
    }),
    UsersModule,
    TransactionModule,
    AccountsModule,
    CategoriesModule,
    DashboardsModule,
    AuthModule,
    OriginatorsModule,
  ],
})
export class AppModule {}
