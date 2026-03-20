import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './client.entity';

@Controller('clients')
export class ClientsController {
  constructor(private readonly _service: ClientsService) {}

  @Get()
  findAll(): Client[] {
    return this._service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Client | null {
    return this._service.findOne(id);
  }

  @Post()
  create(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('address') address: string,
    @Body('password') password: string,
  ): Client {
    return this._service.create(firstName, lastName, address, email, password);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<Client>,
  ): Client | null {
    return this._service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this._service.remove(id);
  }
}
