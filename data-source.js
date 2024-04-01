import { DataSource } from "typeorm";
import { UserSchema } from "./src/modules/auth/entity/user.entity.js";

export const authDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [UserSchema],
  synchronize: true,
  driver: {},
});
