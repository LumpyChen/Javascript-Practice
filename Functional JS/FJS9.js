/**
 * Created by Lumpychen on 16/2/3.
 */
var slice = Array.prototype.slice;

function logger(namespace) {
    // SOLUTION GOES HERE
    return function (){
        console.log.apply(console,(namespace,slice.apply(arguments).reduce(function (a,b) {
            return a+' '+b;
        })));
    }
}

module.exports = logger


//var slice = Array.prototype.slice
//
//function logger(namespace) {
//    return function() {
//        console.log.apply(console, [namespace].concat(slice.call(arguments)))
//    }
//}
//
//module.exports = logger