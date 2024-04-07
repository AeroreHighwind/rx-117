// user.module.js
import { EntitySchema } from "typeorm";
import { User } from "../auth.module.js";
import { UserProfile } from "../../user/user.module.js"; // Adjust the path

export const UserSchema = new EntitySchema({
  name: "User",
  tableName: "users",
  target: User,
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    username: {
      type: "varchar",
      length: 15,
    },
    email: {
      type: "varchar",
      unique: true,
      length: 255,
    },
    password: {
      type: "varchar",
      length: 60,
    },
    createdAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
  relations: {
    profile: {
      type: "one-to-one",
      target: "UserProfile",
      joinColumn: {
        name: "userId",
        referencedColumnName: "id",
      },
    },
  },
});
