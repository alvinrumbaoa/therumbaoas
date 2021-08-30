const BlogController = require('../controller/blog.controller');

module.exports = function(app) {
	// get all blogs
	app.get("/api/blogs", BlogController.getAllBlogs);
	// create Blog
	app.post("/api/blogs", BlogController.createBlogs);
	// get one Blog
	// create a param variable called "id"
	app.get("/api/blogs/:id", BlogController.getOneBlog);
	// update Blog
	app.put("/api/blogs/:id", BlogController.updateBlog);
	// delete Blog
	app.delete("/api/blogs/:id", BlogController.deleteBlog);
}
