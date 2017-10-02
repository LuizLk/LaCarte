import { IConfig } from './config.interface';

export const config: IConfig = {
  sql: {
    autoSchemaSync: true,
    autoMigrationsRun: true,
    driver: {
      database: 'dblacarte',
      host: 'us-cdbr-azure-southcentral-f.cloudapp.net',
      password: 'dceb4557',
      port: 3306,
      type: 'mysql',
      username: 'bd957709ee8ba0'
    }
  }
};
