import { Module } from '@nestjs/common';
import { OriginatorsService } from './originators.service';
import { OriginatorsRepository } from './originators.repository';
import { OriginatorsController } from './originators.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Originator, OriginatorSchema } from './originator.schema';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Originator.name, schema: OriginatorSchema },
    ]),
    CategoriesModule,
  ],
  controllers: [OriginatorsController],
  providers: [OriginatorsService, OriginatorsRepository],
})
export class OriginatorsModule {}
