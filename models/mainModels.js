const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// connect to atlas
const mongoURI =
  'mongodb+srv://tester:password5@cluster0.1sqlz.mongodb.net/BookshelfDB?retryWrites=true&w=majority';
mongoose
  .connect(mongoURI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'BookshelfDB',
    useCreateIndex: true  //prevents deprecation warning
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(() => console.log('Error in connection to Mongo DB'));

// media schema
const mediaSchema = new Schema({
  id: Number,
  title: String,
  type: String,
  currentStatus: String,
});

// declare media for export
// const Media = mongoose.model('Media', mediaSchema);

  const SALT_WORK_FACTOR = 10;

  // user schema
const userSchema = new Schema({
  profileInfo: {
    username: {type: String, unique: true, required: true}, 
    password: {type: String, required: true}
  },
  media: [mediaSchema],
});

// No arrow functions, to use "this"
// 'save' is a presave hook, executes everytime the document is saved
userSchema.pre('save', function (next) {
  // this refers to entire document which has username and password properties
  const user = this;
  // user.password becomes the passed in property
  // bcrypt.hash, pw + salt
  bcrypt.hash(user.profileInfo.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    // password is reassigned the hash
    user.profileInfo.password = hash;
    // return next middleware, moves on to the saving document
    return next();
  });
});

// declare user for export
const User = mongoose.model('User', userSchema);

// sessionSchema
const sessionSchema = new Schema({
  cookieId: {type: String, required: true, unique: true},
  createdAt: {type: Date, expires: 30, default: Date.now},
});

// declare session for export
const Session = mongoose.model('Session', sessionSchema);


// exports media model in an object to be used in the controller
module.exports = {
  User,
  Session
}





