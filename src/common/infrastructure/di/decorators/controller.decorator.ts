import { injectable } from 'inversify';
import 'reflect-metadata';

export const controllers: string[] = [];

export default (key: string) => {
  controllers.push(key);
  const injectableDecorator = injectable();
  return <T extends { new (...args: any[]): {} }>(target: T) => {
    Reflect.defineMetadata('controller', key, target.prototype);

    return injectableDecorator(target);
  };
};
