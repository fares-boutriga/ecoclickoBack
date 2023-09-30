const Blog =require('../database/models/BlogModel')

module.exports={
    createClaim : (req , res) => {
        const BlogTitle = req.body.blogTitle;
        const BlogContent = req.body.blogContent;
        const BlogImage = req.body.blogImage;
        const CommnetID=req.params.commentId
         Blog.create({BlogTitle,BlogContent,BlogImage,CommnetID})
         .then(result => {
           res.status(201).send(result);
         })
         .catch((err) => {
           res.status(500).send(err);
         });
         
      },
      getAllBlog:(req,res)=>{
        Blog.findAll()
        .then(result=>{
            res.status(201).send(result)
        })
      }
}