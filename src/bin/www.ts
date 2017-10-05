import * as http from 'http';
import 'reflect-metadata';
import { Container } from 'typedi';
import { createConnection, useContainer } from 'typeorm';
import { config } from '../config';
import { BaseEntity, User, Cardapio } from '../entities';
import { app } from './app';

useContainer(Container);

createConnection({
  ...config.sql,
  entities: [
    BaseEntity,
    User,
    Cardapio
  ]
}).then(
  () => http
    .createServer(app)
    .listen(8082, () => console.log('Server started on port 8082'))
  ).catch(
  (err: Error) => console.error(err.message)
  );
