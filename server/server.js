const express = require('express');
// destructured import of mongoose.Mongoose object
const {Mongoose} = require('mongoose');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());

// gets mediaController middleware from mediaController.js
const userController = require('./../controllers/userController');
const sessionController = require('./../controllers/sessionController');
const cookieController = require('./../controllers/cookieController');
const mediaController = require('./../controllers/mediaController');

// use express.json instead of body-parser
app.use(express.json());
const PORT = 3000;

// checks for valid session cookie -- is the user already in an active session?
app.get('/api/users', sessionController.isLoggedIn, sessionController.servePage, (req, res) => {
  // json stringified response of sessionAuthenticated cookie
  res.status(200).json(res.locals.payload);
});

// create user
app.post('/api/users/create',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.createSession,
  sessionController.servePage,
  (req, res) => {
    res.status(200).json(res.locals.payload);
});

// user login
app.post('/api/users/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.createSession,
  sessionController.servePage,
  (req, res) => {
    res.status(200).json(res.locals.payload);
});

//  get media profile
app.get('/api/media', mediaController.getMedia, (req, res) => {
  // on success retrieve the media profile
  res.status(200).json(res.locals.media);
});

// adding type of media
app.post('/api/media', mediaController.addMedia, (req, res) => {
  // on success, send the media input
  res.status(200).json(res.locals.media);
});

// update a specific media entry
app.put('/api/media', mediaController.updateMedia, (req, res) => {
  res.status(200).json(res.body);
});

// delete media entry
app.delete('/api/media', mediaController.deleteMedia, (req, res) => {
  res.status(200).json(res.body);
});

// sending to homepage
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './../index.html'));
});

// Global error handler
app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

// listen to PORT
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});