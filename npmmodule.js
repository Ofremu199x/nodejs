var http = require('http');
var cap = require('upper-case');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(cap.upperCase('hello world'));
    res.end();
}).listen(8080);