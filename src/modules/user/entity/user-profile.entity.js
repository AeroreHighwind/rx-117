import { EntitySchema } from "typeorm";
import { UserProfile } from "../user.module.js";

export const UserProfileSchema = new EntitySchema({
  name: "UserProfile",
  tableName: "profiles",
  target: UserProfile,
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
    faction: {
      type: "varchar",
      length: 20,
    },
    createdAt: {
      type: "timestamp",
      default: new Date().toISOString().split("T")[0],
    },
  },
});
