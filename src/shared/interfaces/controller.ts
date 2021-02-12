import { HttpRequest, HttpResponse } from './http';

export interface Controller {
  handle: (httprtequest: HttpRequest) => Promise<HttpResponse>;
}
