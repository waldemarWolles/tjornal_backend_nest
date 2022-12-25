import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  fullName: string;

  @IsEmail(undefined, { message: 'Wrong Email' })
  // @UniqueOnDatabase(UserEntity, {
  //   message: 'This email already exists',
  // })
  email: string;

  @Length(6, 32, {
    message:
      'Password value should not be less that 6 symbols, and not more than 32 symbols',
  })
  password?: string;
}
