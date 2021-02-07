export const Get = (
  path: string = '',
  statusCode: number = 200
): MethodDecorator => {
  return route('get', path, statusCode);
};

export const Post = (
  path: string = '',
  statusCode: number = 201
): MethodDecorator => {
  return route('post', path, statusCode);
};

export const Put = (
  path: string = '',
  statusCode: number = 204
): MethodDecorator => {
  return route('put', path, statusCode);
};

const route = (
  method: string,
  path: string = '',
  statusCode: number = 200
): MethodDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const routes = Reflect.getMetadata('web:routes', target) || [];
    Reflect.defineMetadata(
      'web:routes',
      [...routes, { method, handler: propertyKey, path, statusCode }],
      target
    );

    return descriptor;
  };
};
