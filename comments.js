// Create web server with Node.js
// Run: node comment.js
// URL: http://localhost:8080/comment.html

var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
    // Open a file on the server and return its content
    fs.readFile('comment.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);


