/**
 * Created by Lumpychen on 16/2/4.
 */
var buffer = new Buffer('Lumpy','utf-8');
console.log(buffer);

console.log([].slice.call(buffer).map(function (bf) {
    return bf.toString(16);
}),[].slice.call(buffer).map(function (bf) {
    return String.fromCharCode(bf);
}))


var str = '凉皮';
console.log(Buffer(str).length);
console.log(Buffer(str));
console.log(Buffer(str).toJSON());


