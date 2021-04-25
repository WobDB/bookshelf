// import Media schema from models
const {User} = require('../models/mainModels.js');

// object contains all mediaController middleware
const mediaController = {};

// A possible approach (syntax is not exactly correct - this is the general idea)

// User.findOne({_id: req.params.userId}).
// then -> userMedia = user.media
// userMedia.push(req.body)

// User.update({_id: req.params.userId}, {media: userMedia})

// middleware to get entire media profile of user
mediaController.getMedia = (req, res, next) => {
  // find all media catalog
  User.findOne({_id: req.query.userId})
    .exec()
    // response is the found User
    .then((response) => {
      // console.log to see if fired
      console.log('mediaController getMedia fired');
      // if no user found
      if (!response) {
        // store an empty object in local memory for front end
        res.locals.media = {};
        return next();
      }
      // store in local memory the User.media
      res.locals.media = response.media;
      return next();
    })
    .catch((err) => {
      next('error in getMedia middleware');
    });
};

// add a media type to user profile
mediaController.addMedia = (req, res, next) => {
  //media.create, create conditions for data to allow into array
  const {title, type, currentStatus} = req.body;

  // update media property on user
  User.update({title, type, currentStatus})
    .then((response) => {
      console.log('mediaController addMedia fired');
      res.locals.media = response;
      return next();
    })
    .catch((err) => {
      next('error in addMedia middleware');
    });
};

// update the entry of a specific media type
mediaController.updateMedia = (req, res, next) => {};

// deletes specific media type entry
mediaController.deleteMedia = (req, res, next) => {
  const {id} = req.body;
};

// exports mediaController object to server
module.exports = mediaController;
