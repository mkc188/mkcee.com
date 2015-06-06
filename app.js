var express = require('express');
var serveStatic = require('serve-static');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

if (process.env.NODE_ENV == 'production') {
  app.use(serveStatic('dist'));
} else{
  app.use(serveStatic('.tmp'));
  app.use(serveStatic('app'));
  app.use('/bower_components', serveStatic('bower_components'));
}

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
