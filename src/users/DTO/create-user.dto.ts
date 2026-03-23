import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail({}, { message: 'o e-mail deve ser válido' })
  @IsNotEmpty({ message: 'o e-mail é obrigatório' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'o endereço é obrigatório' })
  address: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  password: string;
}
