import { EntitySchema } from "typeorm";

const UserEntity = new EntitySchema({
  id: {
    primary: true,
    type: "int",
    generated: true,
  },
  email: {
    type: "varchar",
  },
  username: {
    type: "varchar",
  },
  password: {
    type: "text",
  },
});

export default UserEntity;
// import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// @Entity()
// export class UserModel {
//   @PrimaryGeneratedColumn()
//   id;

//   @Column()
//   email;

//   @Column()
//   username;

//   @Column()
//   password;
// }
