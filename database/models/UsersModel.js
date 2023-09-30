const { DataTypes } = require('sequelize');
const sequelize =require('../configdb')

const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    userEmail: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    userPassword: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  });

  Admin.belongsTo(Blog, { foreignKey: 'Blog_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  module.exports={Users}