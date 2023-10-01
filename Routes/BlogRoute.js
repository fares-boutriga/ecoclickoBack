const router=require("express").Router()
const {getAllBlog} =require('../controllers/BlogController')

router.get('/getAll',getAllBlog)


module.exports=router