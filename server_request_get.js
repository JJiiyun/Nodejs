var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res){
    console.log('---log start---');

    var parsedUrl = url.parse(req.url);
    console.log(parsedUrl);
    
    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
    console.log(parsedQuery);
    
    console.log('---log end---');

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('var1의 값은 ' + parsedQuery.var1);
});

server.listen(8080, function(){
    console.log('Server is running');
});