import { Injectable } from '../../../common';
import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';

@Injectable()
export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];
  private id: number = 1;

  findAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  create(newUser: User): Promise<User> {
    newUser.id = this.id;
    this.id++;
    this.users.push(newUser);
    return Promise.resolve({ ...newUser });
  }
}
