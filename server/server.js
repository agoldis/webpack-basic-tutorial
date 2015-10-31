var express = require('express');
var path = require('path');

var port = 3000;
var app = express();
app.use(express.static(__dirname + '/../app')); // true static content
app.use(express.static(__dirname + '/../webpack')); // webpack generated content
app.listen(port, 'localhost', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
