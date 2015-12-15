var express = require('express');
var app = express();
var nodedump = require('nodedump').dump;
var routes = require('./router');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static("public"));
app.use('/', routes);


//code for local server
var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("Node is listening on: " + port);
});

//code for production server
// var server = app.listen(80, function() {
//     var port = server.address().port;
//     console.log("Node is listening on: " + port);
// });


