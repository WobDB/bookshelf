const { User } = require('../models/mainModels');

const userController = {};

// middleware to create a new user
userController.createUser = async (req, res, next) => {
  const { userName, password, email, firstName, lastName } = req.body;
  if (!userName || !password || !email || !firstName || !lastName ) return next('Missing information in userController.createUser');

  // NOTE: I think we need some kind of a check here to see if a user with this userName already exists

  try {
    const newUser = await User.create({ userName, password, email, firstName, lastName });
    res.locals.user = newUser;
    return next();
  } catch (error) {
    console.log(error.stack);
  }
};


// middleware to check whether user already exists
userController.verifyUser = async (req, res, next) => {
  const { userName, password } = req.body;

  try {
    const foundUser = User.findOne({ userName, password });
    if (foundUser !== null) {
      console.log(`User ${userName} verified!`);
      return next();
    } else {
      res.locals.notFound = true;
      return next();
    }
  } catch (error) {
    console.log(error.stack);
  }
}

module.exports = userController;