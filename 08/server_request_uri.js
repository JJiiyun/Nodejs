var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
    console.log(req.url);
    var parsedUrl = url.parse(req.url);
    //parsedUrl에서 서버 URI에 해당하는 pathname만 따로 저장
    var resource = parsedUrl.pathname;
    console.log('resource path=%s', resource);

    //리소스에 해당하는 문자열이 아래와 같으면 해당 메세지를 클라이언트에게 전달
    if(resource == '/address'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('서울특별시 강남구 논현1동 111');
    }else if(resource == '/phone'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('02-3545-1237');
    }else if(resource == '/name'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('Hong Gil Dong');
    }else{
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('404 Page Not Found');
    }

});

//http의 기본 포트가 80번이기 때문에 호출 시 localhost 만 써도 됨.
server.listen(80, function(){
    console.log('Server is running...');
});

