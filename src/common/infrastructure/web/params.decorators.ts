export const Body = (key: string = ''): ParameterDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    console.log(target, propertyKey, parameterIndex);
    Reflect.defineMetadata(
      'body:param',
      { propertyKey, parameterIndex, key },
      target
    );
  };
};
