const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect to atlas
const mongoURI =
  'mongodb+srv://tester:password5@cluster0.1sqlz.mongodb.net/BookshelfDB?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'BookshelfDB',
}).then(() => console.log('Connected to Mongo DB.'))
.catch(()=> console.log('Error in connection to Mongo DB') )

// media schema
const mediaSchema = new Schema({
  id: Number,
  title: String,
  type: String,
  currentStatus: String,
});



// exports media model in an object to be used in the controller
module.exports = mongoose.model('Media', mediaSchema);
//  test
