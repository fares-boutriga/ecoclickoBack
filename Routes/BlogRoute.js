const router=require("express").Router()
const {getAllBlog, createBlgo, deleteBlog, updateBlog} =require('../controllers/BlogController')

router.get('/getAll',getAllBlog)
router.post('/addBlog/:adminId',createBlgo)
router.delete('/deleteBlog:blogId',deleteBlog)
router.put('/update/:blogId',updateBlog)


module.exports=router