import { DataSource } from "typeorm";

const authDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: ["src/auth/models/*.js"],
  logging: true,
  synchronize: true,
  driver: {},
});

export default authDataSource;
