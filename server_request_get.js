var http = request('http');
var url = request('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res){
    console.log('---log start---');
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);
    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
    console.log(parsedQuery);
    console.log('---log end---');

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Hello node js');
});

server.listen(8080, function(){
    console.log('Server is running');
});