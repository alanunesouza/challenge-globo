import { Router, Request, Response } from 'express';

const routes = Router();

routes.use('/', (request: Request, response: Response) => {
  return response.send('Hello World!');
});

export default routes;
