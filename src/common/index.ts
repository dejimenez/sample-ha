import { LOGGER_SERVICE } from './constants';
import {
  registerController,
  registerProvider,
  get,
} from './infrastructure/di/container';
import { ConsoleLoggerService } from './infrastructure/logger/console-logger.service';

export { Get, Post, Put } from './infrastructure/web/routing';
export { Body } from './infrastructure/web/params.decorators';
export { startWebControllers } from './infrastructure/web';
export { Controller } from './infrastructure/di';
export * from './constants';
export { registerController, registerProvider, get };

registerProvider(LOGGER_SERVICE, ConsoleLoggerService);
