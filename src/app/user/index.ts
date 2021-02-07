import { registerController, registerProvider } from '../../common';
import { UserService } from './application/user.service';
import { USER_CONTROLLER, USER_REPOSITORY, USER_SERVICE } from './constants';
import { InMemoryUserRepository } from './infrastructure/in-memory-user.repository';
import { UserController } from './infrastructure/user.controller';

registerController(USER_CONTROLLER, UserController);
registerProvider(USER_REPOSITORY, InMemoryUserRepository);
registerProvider(USER_SERVICE, UserService);
