const Blogs = require("../model/blog.model");

module.exports.getAllBlogs = (req, res)  => {
    console.log("get all Blog post");
    
    Blogs.find({ })
        .then((allBlogs) =>{
                console.log(allBlogs);
                res.json(allBlogs);
        })
        .catch((err) => {
                console.log(err);
                res.json(err);
        })
    };

    module.exports.createBlogs =(req, res) =>{
        console.log(require);
        Blogs.create(req.body)
            .then((newBlog) => { 
                    console.log(newBlog);
                    res.json(newBlog);
            })
            .catch((err) =>{
                console.log(err);
                res.json(err);
            })
    }

    module.exports.getOneBlog = (req, res) => {
        console.log("inside getOneBlog");
        console.log(req.params.id);
    
        Blogs.findById(req.params.id)
            .then((oneBlog) => {
                console.log(oneBlog);
                res.json(oneBlog);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };


    module.exports.updateBlog = (req, res) => {
        console.log("inside updateBlog");
        console.log(req.params.id);  
        console.log(req.body);      
        Blogs.findByIdAndUpdate(req.params.id, req.body, {
            new: true,   
            runValidators: true  
        })
            .then((updatedBlog) => {
                console.log(updatedBlog);
                res.json(updatedBlog);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    
    // delete Blog
    module.exports.deleteBlog = (req, res) => {
        console.log("inside deleteBlog");
        console.log(req.params.id);
    
        Blogs.findByIdAndDelete(req.params.id)
            .then((deletedBlog) => {
                // this is the deleted document....your last chance!!!
                console.log(deletedBlog);
                res.json(deletedBlog);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    