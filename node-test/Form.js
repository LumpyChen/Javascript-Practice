/**
 * Created by Lumpychen on 16/2/5.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring')
var server = http.createServer();


var HtmlDir = __dirname + '/Test/';

server.on('request', function (req,res) {
    'use strict'
    switch (url.parse(req.url).pathname){
        case '/':
            sendData(HtmlDir+'index.html',req,res);
            break;
        case '/login':
            sendData(HtmlDir+'login.html',req,res);
            break;
        case '/login/check':
            //console.log(req.method)
            //console.log(url.parse(req.url).query)
            if (req.method.toUpperCase() == 'GET'){
            console.log(querystring.parse(url.parse(req.url).query))
            }else{

                //console.log(req.method)

                let str= '';
                req.on('data',function(chunk){
                    str += chunk;
                })
                req.on('end', function () {
                    console.log(querystring.parse(str))
                })
            }
            break;

        default:
            res.writeHead('404',{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>找不到页面</h1><hr/>');
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