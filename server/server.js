const express = require('express');
// destructured import of mongoose.Mongoose object
const {Mongoose} = require('mongoose');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());

// gets mediaController middleware from mediaController.js
const mediaController = require('./../controllers/mediaController');

// use express.json instead of body-parser
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './../index.html'));
});

// create user
app.post('/api/users/create', (req, res) => {
  res.status(200);
});

// checks for valid session cookie
app.get('/api/users', (req, res) => {
  // json stringified response of sessionAuthenticated cookie
  res.status(200).json(res.locals.sessionAuthenticated);
});

// userlog in
app.post('/api/users/login', (req, res) => {
  res.status(200);
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
  res.sendFile(path.resolve(__dirname, './../index.html'));
});

// Global error handler
app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

// listen to PORT
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});