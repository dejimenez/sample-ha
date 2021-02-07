import { Container } from 'inversify';

export const container = new Container();

export const registerProvider = <T>(
  key: string,
  target: new (...args: any[]) => T
) => {
  container.bind<T>(key).to(target).inSingletonScope();
};

export const registerController = <T>(
  key: string,
  target: new (...args: any[]) => T
) => {
  container.bind<T>(key).to(target).inSingletonScope();
};

export const get = <T>(key: string) => container.get<T>(key);
