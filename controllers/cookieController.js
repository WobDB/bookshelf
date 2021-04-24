const cookieParser = require('cookie-parser');
const { User } = require('../models/mainModels');

const cookieController = {};


// middleware to set SSID cookie on user
cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.user.id, { httpOnly: true });
  return next();
};

module.exports = cookieController;