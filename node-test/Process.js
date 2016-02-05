/**
 * Created by Lumpychen on 16/2/4.
 */
//console.log(process);
//console.log(process.argv)
// 第一个参数——编译器
// 第二个参数——__filename

console.log(process.argv[1]==__filename)
console.log(process.execPath);
//编译器位置
console.log('-------------------');
console.log(process.env);
//用户环境信息


console.log('-------------------');
console.log(process.pid,process.title,process.arch);
console.log(process.platform);
//process.kill(process.pid)
console.log('-------------------');
console.log(process.version);
console.log('-------------------');
console.log(process.versions);
console.log('-------------------');
console.log('-------------------');
console.log('-------------------');
process.stdin.resume()
process.stdin.on('data',function(chunk){
    process.stdout.write('Hello node!\n');
    process.stdout.write('用户输入了:'+chunk);
});
// 用于监听用户数据


//
