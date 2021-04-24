const express = require('express');
const app = express();
const path = require('path');


// use express.json instead of body-parser
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
})


app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './../index.html'));
})



