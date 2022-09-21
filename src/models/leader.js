import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Person } from './person.js'

export const Leader = sequelize.define('leader', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
  },
  name: { 
    type: DataTypes.STRING,
 
  },
  surname: { 
    type: DataTypes.STRING,
    
  },
  age: { 
    type: DataTypes.INTEGER,
    
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
    
  },
  description: { 
    type: DataTypes.STRING,
  },

 }, {
  timestamps:true
 })

 Leader.hasMany( Person, {
  foreignKey: 'leaderId',
  sourceKey: 'id'
})

Person.belongsTo(Leader, {
  foreignKey: 'leaderId',
  personId: 'id'
});