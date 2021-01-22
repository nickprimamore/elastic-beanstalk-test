"use strict";

var express = require('express');

var path = require('path');

var cors = require('cors');

var PORT = process.env.HTTP_PORT || 4001;
var app = express();
app.use(cors());
app.use(express["static"](path.join(__dirname, 'client', 'build')));
app.get('/test', function (req, res) {
  res.json({
    message: 'Successful response from express server!'
  });
});
app.listen(PORT, function () {
  console.log("Server listening on port ".concat(PORT));
});
