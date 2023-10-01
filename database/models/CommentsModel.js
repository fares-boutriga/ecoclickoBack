const { DataTypes } = require('sequelize');
const sequelize =require('../configdb')
const Users =require('../models/UsersModel')
const Comments = sequelize.define('Comments', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    like: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
  });
  Comments.hasMany(Users, { foreignKey: 'Comments_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  module.exports=Comments