const Blog =require ("../database/models/BlogModel")
module.exports = {
    createClaim: (req, res) => {
      const { blogTitle, blogContent, blogImage } = req.body;
      const CommentsId = req.params.commentId; 
  
      Blog.create({ blogTitle, blogContent, blogImage, CommentsId })
        .then(result => {
          res.status(201).send(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },
  
    getAllBlog: (req, res) => {
      Blog.findAll()
        .then(result => {
          res.status(200).send(result); 
        })
        .catch(err => {
          res.status(500).send(err);
        });
    }
  };
  