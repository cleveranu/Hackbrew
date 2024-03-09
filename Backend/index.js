// index.js
const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is your backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});