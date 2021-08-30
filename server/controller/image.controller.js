const Images = require("../model/image.model");

module.exports.getAllImages =  (req, res)  => {
    console.log("get all Images");
    
        Images.find({ })
            .then((allImages)=>{
                    console.log(allImages);
                    res.json(allImages);
            })
            .catch((err) => {
                    console.log(err);
                    res.json(err);
            })
    }
    
    module.exports.createImages=(req, res) =>{
        console.log(req.body);
        Images.create(req.body)
            .then((newImages) => { 
                    console.log(newImages);
                    res.json(newImages);
            })
            .catch((err) =>{
                console.log(err);
                res.json(err);
            })
    }

    module.exports.getOneImages= (req, res) => {
        console.log("inside getOneImage");
        console.log(req.params.id);  
    
        Images.findById(req.params.id)
            .then((oneImage) => {
                console.log(oneImage);
                res.json(oneImage);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    }

    module.exports.updateImages = (req, res) => {

        Images.findByIdAndUpdate(req.params.id
        , req.body, {
            new:true
        })
        .then(updatedImages => {
            console.log(updatedImages);
            res.json(updatedImages);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
    }

    module.exports.deleteImages = (req, res) => {
        Images.findByIdAndDelete(req.params.id)
            .then(deletedImages => {
                console.log(deletedImages);
                res.json(deletedImages);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })

    }