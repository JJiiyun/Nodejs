var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res){
    var parsedUrl = url.parse(req.url);
    var resource = parsedUrl.pathname;

    if(resource == '/hello') {
        fs.readFile('hello.html', 'utf-8', function(error, data){
            if(error) {
                res.writeHead(500, {'Content-Type':'text/html'});
                res.end('500 Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(data);
            }

        });
    }else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('404 Page Not Found');
    }
    
    });
    
    server.listen(80, function(){
        console.log("Server is running");
    });
