import { DataTypes, Model } from "sequelize";
import { UserEntity } from "../../auth/auth.module.js";
import { dataBase } from "../../../server/data-source.js";

export class UserProfileEntity extends Model {}

UserProfileEntity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(15),
    },
    gender: {
      type: DataTypes.TINYINT,
    },
    faction: {
      type: DataTypes.STRING(20),
    },
    title: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.BLOB,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: dataBase,
    modelName: "profile",
    paranoid: true,
  }
);

UserProfileEntity.belongsTo(UserEntity, { foreignKey: "userId" });
