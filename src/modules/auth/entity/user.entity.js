import { Sequelize, DataTypes } from "sequelize";
import { dataBase } from "../../../../data-source.js";

export const UserEntity = dataBase.define("user", {
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
});

// Sync the model with the database
dataBase.sync({ force: true });
