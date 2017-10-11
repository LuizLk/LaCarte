import * as http from 'http';
import 'reflect-metadata';
import "es6-shim";
import { Container } from 'typedi';
import { createConnection, useContainer } from 'typeorm';
import { config } from '../config';
import { BaseEntity, User, Cardapio } from '../entities';
import { app } from './app';

useContainer(Container);

const port = process.env.port || 8082;

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
    .listen(port, () => console.log('Server started on port ' + port))
  ).catch(
  (err: Error) => console.error(err.message)
  );