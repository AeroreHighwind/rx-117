// user-profile.module.js
import { EntitySchema } from "typeorm";
import { User } from "../../auth/auth.module.js"; // Adjust the path
import { UserProfile } from "../user.module.js";

export const UserProfileSchema = new EntitySchema({
  name: "UserProfile",
  tableName: "profiles",
  target: UserProfile,
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
    gender: {
      type: "tinyint",
    },
    faction: {
      type: "varchar",
      length: 20,
    },
    title: {
      type: "varchar",
    },
    img: {
      type: "blob",
    },
    createdAt: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    userId: {
      type: "int",
    },
  },
  relations: {
    user: {
      type: "one-to-one",
      target: "User",
      joinColumn: {
        name: "userId",
        referencedColumnName: "id",
      },
    },
  },
});
