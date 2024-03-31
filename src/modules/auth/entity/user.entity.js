import { EntitySchema } from "typeorm";
import { UserModel } from "../models/user.model.js";
import "reflect-metadata";

export const UserSchema = new EntitySchema({
  name: "User",
  tableName: "users",
  target: UserModel,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "uuid",
    },
    email: {
      type: "varchar",
      length: 15,
    },
    username: {
      type: "varchar",
      length: 15,
    },
    password: {
      type: "varchar",
      length: 15,
    },
    createdAt: {
      type: "timestamp",
      default: new Date().toISOString().split("T")[0],
    },
  },
});
