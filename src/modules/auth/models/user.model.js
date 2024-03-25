import { EntitySchema } from "typeorm";

export const UserEntity = new EntitySchema({
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
});
