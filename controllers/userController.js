const { User } = require('../models/mainModels');
const bcrypt = require('bcrypt');

const userController = {};

// middleware to create a new user
userController.createUser = async (req, res, next) => {
  
  console.log(req.body);
  const { username, password, email, firstName, lastName } = req.body;
  if (!username || !password || !email || !firstName || !lastName ) return next('Missing information in userController.createUser');

  try {
    console.log('Trying to create and save document...');
    const newUser = await User.create({userProfile: req.body});
    console.log('Document created: ', newUser);
    res.locals.user = newUser;
    return next();
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
};

// POSSIBLY:
// userController.encryptPassword = (req, res, next) => {
//   
// };

// middleware to check whether user already exists
userController.verifyUser = async (req, res, next) => {

  console.log('Login received: ', req.body);
  const { username, password } = req.body;

  console.log(`username and password:`, username, password);
  // only query userName; check out bcrypt docs to see how to compare input password and encrypted password
  try {
    //Login received:  { username: 'a', password: 'a' }
    const foundUser = await User.findOne({ "userProfile.username" : username }).exec();
    console.log('found user: ', foundUser);
    if (foundUser !== null) {
      bcrypt.compare(password, foundUser.userProfile.password, (err, response) => {
        if (err) return next(err);
        if (response) {
          console.log(`User ${username} verified!`);
          res.locals.user = foundUser;
          return next();
        }
      });
    } else {
      res.locals.notFound = true;
      return next();
    }
  } catch (error) {
    console.log(error.stack);
    return next(error);
  }
}

module.exports = userController;