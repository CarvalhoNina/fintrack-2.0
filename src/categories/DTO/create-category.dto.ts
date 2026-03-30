// DTO/create-category.dto.ts
import { IsEnum, IsNotEmpty } from 'class-validator';
import { CategoryType, CategorySubtype } from '../categories.schema';

export class CreateCategoryDto {
  @IsEnum(CategoryType, { message: 'O tipo deve ser income ou expense' })
  @IsNotEmpty()
  type: CategoryType;

  @IsEnum(CategorySubtype, { message: 'Selecione um subtipo válido' })
  @IsNotEmpty()
  subtype: CategorySubtype;
}
