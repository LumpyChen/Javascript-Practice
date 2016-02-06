/**
 * Created by Lumpychen on 16/2/5.
 */
/**
 * Created by Lumpychen on 16/2/5.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer();

var HtmlDir = __dirname + '/Test/';

server.on('request', function (req,res) {
    switch (url.parse(req.url).pathname){
        case '/':
            sendData(HtmlDir+'index.html',req,res);
            break;
        case '/user':
            sendData(HtmlDir+'user.html',req,res);
            break;
        case '/news':
            sendData(HtmlDir+'news.html',req,res);
            break;
        default:
            res.writeHead('404',{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>找不到页面</h1><hr/>')
    }
})

function sendData(file,req,res){
    fs.readFile(file,function(err,data){
        if(err){
            console.log(HtmlDir);
            res.writeHead(404,{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>找不到页面</h1><hr/>')
        }else{
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            })
            res.end(data);
        }

    })
}

server.listen('9090','localhost');