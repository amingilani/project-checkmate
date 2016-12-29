var connect  = require('connect');
var compiler = require('connect-compiler');
var static = require('serve-static');

var server = connect();

server.use(static(__dirname + "/src/views"));
server.use(static(__dirname + "/bower_components/"));

server.listen(3000);

var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch(__dirname + "/src/views");
console.log('Server listening at localhost:3000');
