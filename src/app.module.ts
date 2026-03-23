import { Module } from '@nestjs/common';
import { TransactionModule } from './transaction/transaction.module';
import { AccountsModule } from './accounts/accounts.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/fintrack'),
    UsersModule,
    TransactionModule,
    UsersModule,
    AccountsModule,
    CategoriesModule,
    AuthModule,
    DashboardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
