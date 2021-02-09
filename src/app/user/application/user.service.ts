import { Inject, Injectable } from '../../../common';
import { USER_REPOSITORY } from '../constants';
import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository
  ) {}

  list(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  create(newUser: User): Promise<User> {
    return this.userRepository.create(newUser);
  }
}
