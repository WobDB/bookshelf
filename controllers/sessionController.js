const { Session } = require('../models/mainModels');

const sessionController = {};


// middleware to create a new session
sessionController.createSession = async (req, res, next) => {
  if (res.locals.notFound) return next();
  
  try {
    // this might need to be res.locals.user._id
    await Session.create({ cookieId: res.locals.user._id });
    console.log('New session created!');
    res.locals.sessionAuthenticated = true;
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
  res.locals.ssid = req.cookies.ssid;

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

sessionController.servePage = async (req, res, next) => {
  if (res.locals.sessionAuthenticated) {
    try {
      const foundUser = await User.findOne({ _id: res.locals.ssid }).exec();
      res.locals.payload = {
        verified: true,
        userProfile: foundUser
      };
    } catch (error) {
      console.log(error.stack);
      return next(error);
    }
  } else {
    res.locals.payload = {
      verified: false,
      userProfile: {}
    }
    return next();
  };
};

module.exports = sessionController;