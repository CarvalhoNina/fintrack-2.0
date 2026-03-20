import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';

@Module({
  providers: [ClientsService],
  controllers: [ClientsController]
})
export class ClientsModule {}
