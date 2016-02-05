/**
 * Created by Lumpychen on 16/2/5.
 */
var http = require('http');

var server = http.createServer(function () {
    //console.log(arguments);
});

//console.log(server)

server.listen(8030,'localhost');

server.on('listening', function () {
    console.log('开始监听')
})
server.on('request',function(req,res){
    //console.log(req.url)
    console.log('请求来了!')
    res.writeHead(200,'How are you Indian Mi fans?',{
        'content-type':'text/html;charset=utf-8'
    })
    res.write('<h1>印度的朋友们你们好吗?</h1>');
    res.end();

})
//console.log(http.STATUS_CODES)