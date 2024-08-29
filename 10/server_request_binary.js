var http = require('http');
var url = require('url');
var fs = require('fs');

var mime = require('mime');


var server = http.createServer(function(req, res){
    var parsedUrl = url.parse(req.url);
    var resource = parsedUrl.pathname;

    if(resource.indexOf('/images/') == 0) {
        //첫 글자인 / 를 제외하고 경로를 imgPath 에 저장
        var imgPath = resource.substring(1);
        console.log('imgPath='+imgPath);
        //서비스 하려는 파일의 mime type
        var imgMime = mime.getType(imgPath);
        console.log('mime='+imgMime);
    
        fs.readFile(imgPath, function(error, data){
            if(error){
                res.writeHead(500, {'Content-Type':'text/html'});
                res.end('500 Internal Server '+error);
            }else{
                res.writeHead(200, {'Content-Type':imgMime});
                res.end(data);
            }
        });

    } else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('404 Page Not Found');
    }

});

server.listen(80, function(){
    console.log('Server is running');
});