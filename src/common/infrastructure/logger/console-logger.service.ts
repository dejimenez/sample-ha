import { injectable } from 'inversify';
import { LoggerService } from '../../service/logger.service';
import 'reflect-metadata';

@injectable()
export class ConsoleLoggerService implements LoggerService {
  info(message: string) {
    console.log(message);
  }

  error(message: string) {
    console.error(message);
  }
}
