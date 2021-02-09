import { HttpMethod } from '../enums/http-method';
import { HttpStatusCode } from '../enums/http-status-code.enum';

export interface RouteMetadata {
  method: HttpMethod;
  handler: string | Symbol;
  path: string;
  statusCode: HttpStatusCode;
}
