import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { AccountsModule } from './accounts/accounts.module';
import { ClientsModule } from './clients/clients.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { DashboardsModule } from './dashboards/dashboards.module';

@Module({
  imports: [TransactionsModule, ClientsModule, AccountsModule, CategoriesModule, AuthModule, DashboardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
