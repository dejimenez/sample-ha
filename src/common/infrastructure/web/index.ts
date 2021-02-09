import { Request, Response } from 'express';

import { LOGGER_SERVICE } from '../../constants';
import { LoggerService } from '../../service/logger.service';
import { get, controllers } from '../di';
import { HttpError } from './errors/http.error';

export { Get, Post, Put, Delete } from './decorators/routing.decorator';

const routePath = (path: string) => (path.startsWith('/') ? path : `/${path}`);

const getControllerHandlers = () => {
  return controllers.reduce((handlers: any[], controller: string) => {
    const controllerObj: any = get(controller);
    const routes = Reflect.getMetadata('web:routes', controllerObj);
    if (!routes) return handlers;

    const controllerPath = Reflect.getMetadata('controller', controllerObj);

    return [
      ...handlers,
      ...routes.map((route: any) => ({
        ...route,
        path: `/${controllerPath}${routePath(route.path)}`,
        handler: controllerObj[route.handler].bind(controllerObj),
        paramtypes: Reflect.getMetadata(
          'design:paramtypes',
          controllerObj,
          route.handler
        ),
      })),
    ];
  }, []);
};

const findHandler = (controllerHandlers: any[], method: string, path: string) =>
  controllerHandlers.find(
    (handler: any) => handler.method === method && handler.path === path
  );

export const startWebControllers = () => {
  const controllerHandlers = getControllerHandlers();
  return (req: Request, res: Response) => {
    const url = req.originalUrl && req.originalUrl.toLowerCase();
    const path = url?.endsWith('/') ? url : `${url}/`;
    const method = req.method?.toLowerCase() || 'get';

    const handler = findHandler(controllerHandlers, method, path);

    if (!handler) {
      res.writeHead(404);
      return res.end(`${req.url} not found`);
    }

    executeHandler(handler.handler, req, res, handler.statusCode);
  };
};

const executeHandler = async (
  handler: Function,
  req: Request,
  res: Response,
  statusCode: number
) => {
  let result;
  try {
    result = handler(req.body);
    if (result instanceof Promise) result = await result;
    res.writeHead(statusCode);
    res.end(JSON.stringify(result));
  } catch (error) {
    const logger: LoggerService = get(LOGGER_SERVICE);
    let status = 500;
    if (error instanceof HttpError) {
      status = error.statusCode;
    }

    logger.error(error);
    res.writeHead(status);
    return res.end(error.message);
  }
};
