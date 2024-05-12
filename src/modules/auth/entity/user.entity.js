import { DataTypes, Model } from "sequelize";
import { dataBase } from "../../../server/data-source.js"; // Adjust the path

export class UserEntity extends Model {}

UserEntity.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    // profile: {
    //   type: DataTypes.JSON, // Assuming profile data is stored as JSON
    // },
  },
  {
    sequelize: dataBase,
    modelName: "user",
    paranoid: true,
  }
);

export default UserEntity;
