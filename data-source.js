import { DataSource } from "typeorm";
import { config } from "dotenv";

config();

const authDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  entities: ["src/auth/models/*.js"],
  logging: true,
  synchronize: true,
  driver: {},
});

export default authDataSource;
