const { DataTypes } = require('sequelize');
const sequelize =require('../configdb')
const Blog = require('../models/BlogModel')
const Admin = sequelize.define('Admin', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    adminName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    adminPassword: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });
  Admin.belongsTo(Blog, { foreignKey: 'Blog_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  module.exports=Admin