// Create web server
// 1. Import express
// 2. Create express app
// 3. Create a route for comments
// 4. Create a route for comments/:id
// 5. Start the server
// 6. Listen on port 3000

// 1. Import express
const express = require('express');

// 2. Create express app
const app = express();

// 3. Create a route for comments
app.get('/comments', (req, res) => {
  res.send('Comments');
});

// 4. Create a route for comments/:id
app.get('/comments/:id', (req, res) => {
  res.send(`Comment ${req.params.id}`);
});

// 5. Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});