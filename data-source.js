import { DataSource } from "typeorm";
import { UserEntity } from "./src/modules/auth/schemas/user.schema.js";

export const authDataSource = new DataSource({
  type: "mysql",
  // connectorPackage: "mysql2",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [UserEntity],
  logging: true,
  synchronize: true,
  driver: {},
});
console.log("ENTITIES LOGGED", JSON.stringify(authDataSource.entities));
// const testRepository = authDataSource.getRepository(UserEntity);
// const newUser = UserEntity;
// await testRepository.save({
//   username: "frost",
//   password: "test123",
//   email: "frost@test.com",
// });
