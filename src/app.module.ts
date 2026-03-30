import { Module } from '@nestjs/common';
import { TransactionModule } from './transaction/transaction.module';
import { AccountsModule } from './accounts/accounts.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/fintrack_v3'),
    UsersModule,
    TransactionModule,
    AccountsModule,
    CategoriesModule,
    DashboardsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
