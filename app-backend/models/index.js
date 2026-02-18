import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbType = process.env.DB_TYPE || 'mysql';
const defaultPorts = { mysql: 3306, postgres: 5432 };
const defaultPort = defaultPorts[dbType];

export let sequelize = new Sequelize({
  database: process.env.RDS_DB_NAME,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  host: process.env.RDS_HOSTNAME,
  port: process.env.RDS_PORT || defaultPort,
  dialect: dbType,
  logging: false
});