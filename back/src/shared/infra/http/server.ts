import 'reflect-metadata';
import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import ora from 'ora';
import cors from 'cors';
import { errors } from 'celebrate';
import AppError from '@shared/errors/AppError';
import routes from './routes';

import '@shared/infra/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

// Celebrate errors
app.use(errors());

// Middleware de tratativa de erros
app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);

app.listen(3334, () => {
  ora('Server Running').succeed();
});
