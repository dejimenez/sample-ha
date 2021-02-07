import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { USER_REPOSITORY } from '../constants';
import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';

@injectable()
export class UserService {
  constructor(
    @inject(USER_REPOSITORY) private readonly userRepository: UserRepository
  ) {}

  list(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  create(newUser: User): Promise<User> {
    return this.userRepository.create(newUser);
  }
}
