// import Media schema from models
const { User } = require('../models/mainModels.js');



// object contains all mediaController middleware
const mediaController = {};


// middleware to get entire media profile of user
mediaController.getMedia = (req, res, next) => {
 

};

// add a media type to user profile
mediaController.addMedia = (req, res, next) => {
//media.create, create conditions for data to allow into array
};

// update the entry of a specific media type
mediaController.updateMedia = (req, res, next) => {
  
};

// deletes specific media type entry
mediaController.deleteMedia = (req, res, next) => {
  
};



// exports mediaController object to server
module.exports = mediaController;
