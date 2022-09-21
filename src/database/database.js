import { Sequelize } from "sequelize";

export const sequelize = new Sequelize (
  'contact_list',
  'postgres',
  '123456789',
  {
  host: 'localhost',
  dialect: 'postgres'
  }
);