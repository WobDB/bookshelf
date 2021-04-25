const { Session } = require('../models/mainModels');

const sessionController = {};


// middleware to create a new session
sessionController.createSession = async (req, res, next) => {
  try {
    // this might need to be res.locals.user._id
    const newSession = await Session.create({ cookieId: res.locals.user.id });
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};


// middleware to check if user is already in an active session
sessionController.isLoggedIn = async (req, res, next) => {
  // check to see if there's an ssid cookie present in request cookies
  // compare createdAt to 
  // store bool representing validity at res.locals.sessionAuthenticated
  if (!req.cookies.ssid) {
    res.locals.sessionAuthenticated = false;
    return next();
  }

  const id = req.cookies.ssid;

  try {
    const foundSession = await Session.findOne({ cookieId: id }).exec();
    if (foundSession !== null) {
      console.log('User is logged in!');
      res.locals.sessionAuthenticated = true;
      return next();
    } else {
      res.locals.sessionAuthenticated = false;
      return next();
    }
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

module.exports = sessionController;