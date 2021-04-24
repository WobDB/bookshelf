const { Session } = require('../models/mainModels');

const sessionController = {};


// middleware to create a new session
sessionController.createSession = (req, res, next) => {
  Session.create({ cookieId: res.locals.user.id }, (err, session) => {
    if (err) return next(`Error creating session: ${JSON.stringify(err)}`);
    return next();
  });
};


// middleware to check if user is already in an active session
sessionController.isLoggedIn = (req, res, next) => {
  // check to see if there's an ssid cookie present in request cookies
  // compare createdAt to 
  // store bool representing validity at res.locals.sessionAuthenticated
  const id = res.locals.user.id;

  try {
    const foundSession = Session.findOne({ cookieId: id });
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
  }
};

module.exports = sessionController;