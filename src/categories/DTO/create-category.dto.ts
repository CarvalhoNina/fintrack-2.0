import { IsEnum } from 'class-validator';
import { CategoryType, CategorySubtype } from '../categories.entity';

export class CreateCategoryDto {
  @IsEnum(CategoryType, {
    message: 'A categoria deve ser especificada',
  })
  type: CategoryType;

  @IsEnum(CategorySubtype, {
    message: 'o subtipo da categoria deve ser especificado',
  })
  subtype: CategorySubtype;
}
