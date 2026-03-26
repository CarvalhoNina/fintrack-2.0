import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateOriginatorDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome do originator é obrigatório' })
  longName: string;

  @IsString()
  shortName: string;

  @IsMongoId({ message: 'O ID da categoria deve ser um ObjectId válido' })
  @IsNotEmpty({ message: 'A categoria é obrigatória' })
  categoryId: string;
}
