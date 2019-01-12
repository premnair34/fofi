var express = require('express');
var path = require('path');
var app = express();

// serve static assets from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('fonts'))



// setup routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/routes/index.html'));
});


module.exports = app;

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
