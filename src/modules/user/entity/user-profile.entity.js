// user-profile.model.js
import { DataTypes } from "sequelize";
import { User, UserEntity } from "../../auth/auth.module.js";
import { dataBase } from "../../../../data-source.js";

export const UserProfileEntity = dataBase.define("profile", {
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
});

UserProfileEntity.belongsTo(UserEntity, { foreignKey: "userId" });
