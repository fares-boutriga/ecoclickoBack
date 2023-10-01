const { DataTypes } = require('sequelize');
const sequelize =require('../configdb')
const Comments =require('../models/CommentsModel')
const Blog = sequelize.define('Blog', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    blogTitle: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    blogContent: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    blogImage: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  });

  Blog.belongsTo(Comments, { foreignKey: 'Comments_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

   module.exports= Blog