/**
 * Created by Lumpychen on 16/2/5.
 */
var http = require('http');
var url = require('url');
var server = http.createServer();

server.on('request', function (req,res) {
    switch (url.parse(req.url).pathname){
        case '/':
            res.writeHead('200',{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>首页</h1>')
            break;
        case '/user':
            res.writeHead('200',{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>用户首页</h1>')
            break;
        case '/news':
            res.writeHead('200',{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>新闻首页</h1>')
            break;
        default:
            res.writeHead('404',{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>找不到页面</h1><hr/>')
    }
})

server.listen('9090','localhost')