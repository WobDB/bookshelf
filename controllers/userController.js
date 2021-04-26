const { User } = require('../models/mainModels');

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

  // only query userName; check out bcrypt docs to see how to compare input password and encrypted password
  try {
    const foundUser = await User.findOne({ userProfile: { username } }).exec();
    if (foundUser !== null) {
      bcrypt.compare(password, foundUser.userProfile.password, (err, res) => {
        if (err) return next(err);
        if (res) {
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