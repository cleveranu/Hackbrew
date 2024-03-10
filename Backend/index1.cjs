// Node.js server using Express
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/save-text', (req, res) => {
  const { text } = req.body;

  fs.writeFile('donation.txt', text, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred while saving the file.');
    }
    res.send('Text saved successfully.');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
