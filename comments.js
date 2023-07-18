// Create web server
// 1. Create a web server
// 2. Create a route
// 3. Create a response
// 4. Start the server

// 1. Create web server
const express = require('express');
const app = express();

// 2. Create a route
app.get('/', (req, res) => {
  res.send('Hi there!');
});

// 3. Create a response
app.listen(3000, () => {
  console.log('Listening on port 3000');
});