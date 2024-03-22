export class UserModel {
  @PrimaryGeneratedColumn()
  id;
  @Column()
  username;
  @Column()
  password;
}
