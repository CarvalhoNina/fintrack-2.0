import { Module } from '@nestjs/common';
import { OriginatorService } from './originator.service';

@Module({
  providers: [OriginatorService]
})
export class EstablishmentsModule {}
