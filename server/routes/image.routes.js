const ImagesController = require('../controller/image.controller');

module.exports = function(app) {
		// get all Images
		app.get("/api/images", ImagesController.getAllImages);
		// create Image
		app.post("/api/images", ImagesController.createImages);
		// get one Image
		// create a param variable called "id"
		app.get("/api/images/:id", ImagesController.getOneImages);
			// update Image
		app.put("/api/images/:id", ImagesController.updateImages);
			// // delete movie
		app.delete("/api/images/:id", ImagesController.deleteImages);
	
	}
	

