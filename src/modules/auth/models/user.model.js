import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  email;

  @Column()
  username;

  @Column()
  password;
}
