import { MinLength, MaxLength } from 'class-validator';

export class UserDto {
  @MinLength(10, {
    message: 'Title is too short',
  })
  username!: string;

  @MaxLength(50, {
    message: 'Title is too long',
  })
  password!: string;
}
