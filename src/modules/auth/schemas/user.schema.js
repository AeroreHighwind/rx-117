import { EntitySchema } from "typeorm";
import { UserModel } from "../models/user.model.js";

export const UserEntity = new EntitySchema({
  name: "User",
  tableName: "users",
  target: UserModel, // Optional: specify the table name if different from entity name
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    email: {
      type: "varchar",
    },
    username: {
      type: "varchar(15)",
    },
    password: {
      type: "varchar(15)",
    },
  },
});
