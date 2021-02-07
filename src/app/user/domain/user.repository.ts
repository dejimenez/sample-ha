import { User } from './user';

export interface UserRepository {
  findAll: () => Promise<User[]>;
  create: (newUser: User) => Promise<User>;
}
