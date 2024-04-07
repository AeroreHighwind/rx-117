import { DataSource } from "typeorm";
import { UserSchema } from "./src/modules/auth/auth.module.js";
import { UserProfile } from "./src/modules/user/user.module.js";

export const dataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [UserSchema, UserProfile],
  synchronize: true,
  driver: {},
});
