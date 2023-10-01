const express=require("express")
const cors=require('cors')
const sequelize =require('./database/configdb')

const AdminRoute= require('./Routes/AdminRoute')
const BlogRoute= require('./Routes/BlogRoute')
const CommentsRoute= require('./Routes/CommentsRoute')
const UsersRoute= require('./Routes/UsersRoute')
sequelize.sync({ alter: true }) // You may use { force: true } to drop and recreate tables
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
  const app =express()
  app.use(cors())
  app.use(express.json())

  app.use('/api/Admin',AdminRoute)
  app.use('/api/Blog',BlogRoute)
  app.use('/api/Comments',CommentsRoute)
  app.use('/api/Users',UsersRoute)
  
  const PORT=3000
  app.listen(PORT,()=>{
    console.log('listening on port '+ PORT)
  })