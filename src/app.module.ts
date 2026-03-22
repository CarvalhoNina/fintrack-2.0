import { Module } from '@nestjs/common';
import { TransactionModule } from './transaction/transaction.module';
import { AccountsModule } from './accounts/accounts.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { DashboardsModule } from './dashboards/dashboards.module';

@Module({
  imports: [
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
