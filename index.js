var connect  = require('connect');
var compiler = require('connect-compiler');
var static = require('serve-static');

var server = connect();

server.use(static(__dirname + "/src/views"));

server.listen(3000);

var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch(__dirname + "/src/views");
