import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateOriginatorDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome do originator é obrigatório' })
  longName: string;

  @IsString()
  shortName: string;

  @IsUUID('4', { message: 'O ID da categoria deve ser um UUID válido' })
  @IsNotEmpty({ message: 'A categoria é obrigatória' })
  categoryId: string;
}
