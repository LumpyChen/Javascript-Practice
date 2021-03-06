'use strict';

/**
 * Created by Lumpychen on 16/2/5.
 */
var fs = require('fs');

fs.open('file.txt', 'r', 7, function (err, fd) {
    if (err) {
        console.log('打开文件失败.');
    } else {
        console.log('打开文件成功.');
        var buf = new Buffer(10);

        fs.read(fd, buf, 0, 10, 0, function (err,len,buffer) {
            // buffer   信息置入的buffer对象
            // offset   新内容添加到buffer的其实位置
            // length   添加到buffer中内容长度
            // position   读取文件中的起始位置
            if(err){
                process.stdout.write('读取文件失败');
            }
            else{
                process.stdout.write('读取文件成功,内容为:\n')
                process.stdout.write(buffer+'\n');
                process.stdout.write('长度为:'+len);
            fs.close(fd,function(err){
                if(err){process.stdout.write('\n错误')}
                else {
                    fs.open('file.txt','w',7,function(err,fd){
                        if(err){process.stdout.write('\n错误')}
                        else {
                            var buff = new Buffer('China');
                            //fs.write(fd,buff,0,5,0,0,function(err,length,buff2){
                            //    if(err){process.stdout.write('Error!\n')}
                            //    else {console.log(arguments)};
                            //});
                            //fs.write(fd,buffer,offset,length,position,callback)
                            fs.write(fd,'China',5,'utf-8',function (err,written) {
                                if(err){
                                    console.log('Error!')
                                }else{
                                    console.log(arguments);
                                }
                            })
                        }
                    })
                }
            })

            }


        });
    }
});
