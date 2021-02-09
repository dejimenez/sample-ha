import { inject } from 'inversify';
import { Controller, Get, Post, Body } from '../../../common';
import { UserService } from '../application/user.service';
import { USER_CONTROLLER, USER_SERVICE } from '../constants';
import { User } from '../domain/user';
import { UserDto } from './dto/user.dto';

@Controller(USER_CONTROLLER)
export class UserController {
  constructor(
    @inject(USER_SERVICE) private readonly userService: UserService
  ) {}

  @Get()
  list(): Promise<User[]> {
    return this.userService.list();
  }

  @Post()
  create(@Body() newUser: UserDto): Promise<User> {
    return this.userService.create(newUser);
  }
}
