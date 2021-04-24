const express = require('express');
const app = express();
const path = require('path');

// gets mediaController middleware from mediaController.js
const mediaController = require('./../controllers/mediaController');

// use express.json instead of body-parser
app.use(express.json());
const PORT = 3000;

// create user
app.post('/api/users/create', (req, res) => {
  res.status(200);
});

// userlog in
app.post('/api/users/login', (req, res) => {
  res.status(200);
});

//  get media profile
app.get('/api/media', (req, res) => {
  res.status(200);
});

// adding type of media
app.post('/api/media', (req, res) => {
  res.status(200);
});

// update a specific media entry
app.put('/api/media', (req, res) => {
  res.status(200);
});

// delete media entry
app.delete('/api/media', (req, res) => {
  res.status(200);
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
