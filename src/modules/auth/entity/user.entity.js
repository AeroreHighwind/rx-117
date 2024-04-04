import { EntitySchema } from "typeorm";
import { User } from "../auth.module.js";

export const UserSchema = new EntitySchema({
  name: "User",
  tableName: "users",
  target: User,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "uuid",
    },
    username: {
      type: "varchar",
      length: 15,
    },
    email: {
      type: "varchar",
      unique: true,
      length: 15,
    },
    password: {
      type: "varchar",
      length: 60,
    },
    createdAt: {
      type: "timestamp",
      default: new Date().toISOString().split("T")[0],
    },
  },
});
