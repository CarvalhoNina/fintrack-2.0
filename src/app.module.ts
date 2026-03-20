import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { AccountsModule } from './accounts/accounts.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [TransactionsModule, ClientsModule, AccountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
