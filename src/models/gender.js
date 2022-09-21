import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Person } from './person.js'

export const Gender = sequelize.define('gender', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true
  },
  description: { 
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps:true
});

Gender.hasMany( Person, {
  foreignKey: 'genderId',
  sourceKey: 'id'
})

Person.belongsTo(Gender, {
  foreignKey: 'genderId',
  personId: 'id'
});