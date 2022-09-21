import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Person = sequelize.define('person', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true
  },
  document: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  name: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  age: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  num1_cell: { 
    type: DataTypes.INTEGER,
  },
  num2_cell: { 
    type: DataTypes.INTEGER,
  },
  occupation: { 
    type: DataTypes.STRING,
    allowNull: false
  },
}); 
