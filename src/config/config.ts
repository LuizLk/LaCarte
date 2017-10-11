import { IConfig } from './config.interface';

export const config: IConfig = {
  sql: {
    autoSchemaSync: true,
    autoMigrationsRun: false,
    driver: {
      // database: 'dblacarte',
      // host: 'us-cdbr-azure-southcentral-f.cloudapp.net',
      // password: 'dceb4557',
      // port: 3306,
      // type: 'mysql',
      // username: 'bd957709ee8ba0'
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123456",
      database: "test",
    },
    dropSchemaOnConnection: true
  }
};
