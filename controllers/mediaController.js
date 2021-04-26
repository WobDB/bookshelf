// import Media schema from models
const {User} = require('../models/mainModels.js');

// object contains all mediaController middleware
const mediaController = {};

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
    .catch((error) => {
      console.log(err.stack);
      return next('error in getMedia middleware');
    });
};


// add a media type to user profile
mediaController.addMedia = (req, res, next) => {
  // finds and update media property on user and returns the updated user
  User.findOneAndUpdate(
    // filter for the _id
    {_id: req.query.userId},
    // $push is a mongoDb method to add into media Array
    {$push: {media: req.body}},
    // this property shows the new updated version
    {new: true}
  )
    .then((user) => {
      // store in local memory that last media item just added
      res.locals.media = user.media[user.media.length - 1];
      return next();
    })
    .catch((err) => {
      console.log(err.stack);
      return next('error in addMedia middleware');
    });
};

// update the entry of a specific media type
mediaController.updateMedia = (req, res, next) => {
  User.findOneAndUpdate(
    // filter for the _id
    {
      _id: req.query.userId,
    },
    // set updates the media
    {$set: {media: req.body}},
    // this property shows the new updated version
    {new: true}
  )
    .then((user) => {
      // store in local memory the item that was updated
      res.locals.media = user.media;
      return next();
    })
    .catch((err) => {
      console.log(err.stack);
      return next('error in addMedia middleware');
    });
};

// updates the User by pulling the requested media item
mediaController.deleteMedia = (req, res, next) => {
  User.findOneAndUpdate(
    // filters for the userId
    {_id: req.query.userId},
    // removes from the User.media array the media item
    {$pull: {media: req.body}},
    // this property shows the new updated version
    {new: true}
  )
    .then(next())
    .catch((err) => {
      console.log(err.stack);
      return next('error in mediaController.deleteMedia');
    });
};

// exports mediaController object to server
module.exports = mediaController;
