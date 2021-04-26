const cookieParser = require('cookie-parser');
const { User } = require('../models/mainModels');

const cookieController = {};


// middleware to set SSID cookie on user
cookieController.setSSIDCookie = (req, res, next) => {
  // NOTE: below might need to be res.locals.user._id
  res.cookie('ssid', res.locals.user._id, { httpOnly: true });
  return next();
};

module.exports = cookieController;