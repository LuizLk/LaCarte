import { urlencoded } from 'body-parser';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { useContainer as useContainerClassValidator } from 'class-validator';
import { useContainer, useExpressServer } from 'routing-controllers';
import { Container } from 'typedi';
import { UserController, CardapioController } from '../controllers';

useContainer(Container);

useContainerClassValidator(Container);

const config: express.Application = express();

config
  .use(morgan('dev'))
  .use(helmet())
  .use(urlencoded({
    extended: true
  }));

const app: express.Application = useExpressServer(config, {
  controllers: [
    UserController,
    CardapioController
  ],
  routePrefix: '/api/v1',
});

export { app };
