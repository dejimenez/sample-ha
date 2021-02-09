import { LOGGER_SERVICE } from './constants';
import {
  registerController,
  registerProvider,
  get,
} from './infrastructure/di/container';
import { ConsoleLoggerService } from './infrastructure/logger/console-logger.service';

export {
  Get,
  Post,
  Put,
} from './infrastructure/web/decorators/routing.decorator';
export { Body } from './infrastructure/web/decorators/params.decorators';
export { startWebControllers } from './infrastructure/web';
export { Controller, Inject, Injectable } from './infrastructure/di';
export { LoggerService } from './service/logger.service';
export { registerController, registerProvider, get, LOGGER_SERVICE };

registerProvider(LOGGER_SERVICE, ConsoleLoggerService);
