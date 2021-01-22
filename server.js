const express = require('express');
const cors = require('cors');

const PORT = process.env.HTTP_PORT || 4001;
const app = express();
app.use(cors());

app.get('/test', (req, res) => {
    res.json({
      message: 'Successful response from express server!'
    });
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});