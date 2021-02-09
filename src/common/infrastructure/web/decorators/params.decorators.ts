export const Body = (key: string = ''): ParameterDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    Reflect.defineMetadata(
      'body:param',
      { position: 'body', parameterIndex, key },
      target,
      propertyKey
    );
  };
};
