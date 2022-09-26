var express = require('express');

var app = express();

app.get(['/', '/*[.html]'], (req, res) => {
  if (req.url === '/') {
    res.sendFile(__dirname + '/views/index.html')
  }
  res.sendFile(__dirname + `/views${req.url}`)
})

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/views/404.html')
})

module.exports = app;
