import { Sequelize } from "sequelize";

export const dataBase = new Sequelize({
  dialect: "mysql",
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  logging: false,
});
