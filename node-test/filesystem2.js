/**
 * Created by Lumpychen on 16/2/5.
 */
var fs = require('fs');

var fileName = 'file.txt'
//fs.writeFile(fileName,'Indian',function(){
//
//})
//fs.appendFile(fileName,'China',function(){
//
//})
fs.exists(fileName, function (is) {
    if(!is){
        fs.writeFile(fileName,'Indian',function(err){
            if(err){
                console.log(err)
            }else{
                console.log('创建新文件成功!\n')
            }
        })
    }else{
        fs.appendFile(fileName,'China',function(err){
            if(err){
                console.log('新内容追加失败!')
            }else{
                console.log('新内容追加成功!')
            }
        })
    }
})

fs.rmdir('1',function(err){if(err) {
    process.stdout.write('No!')
    }
})