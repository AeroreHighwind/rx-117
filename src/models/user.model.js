import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  username;

  @Column()
  password;
}
