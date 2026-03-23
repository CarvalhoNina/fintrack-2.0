import { Module } from '@nestjs/common';
import { OriginatorsService } from './originators.service';
import { OriginatorsRepository } from './originators.repository';
import { OriginatorsController } from './originators.controller';

@Module({
  controllers: [OriginatorsController],
  providers: [OriginatorsService, OriginatorsRepository],
})
export class OriginatorsModule {}
