var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(req, res){
    //post 로 전달된 데이터를 담을 변수
    var postdata = '';
    
    //req 객체에 on() 함수로 'data' 이벤트를 연결
    req.on('data', function(data) {
        // data 이벤트 발생마다 함수호출을 통해 postdata 변수에 값을 저장.
        postdata = postdata + data;
    });

    //req 객체에 on() 함수로 'end' 이벤트 연결
    req.on('end', function() {
        //end 이벤트는 한 번만 발생함. 발생 시 postdata 를 querystring 으로 객체화한다.
        var parsedQuery = querystring.parse(postdata);
        console.log(parsedQuery);
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('var1의 값 = ' + parsedQuery.var1);
    });
});

server.listen(8080, function() {
    console.log('Server is running...');
});