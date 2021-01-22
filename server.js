const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.HTTP_PORT || 8081;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/test', (req, res) => {
    res.json({
      message: 'Successful response from express server!'
    });
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});