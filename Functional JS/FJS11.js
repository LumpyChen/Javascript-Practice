/**
 * Created by Lumpychen on 16/2/3.
 */
module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    return arr.map(fn)
}

//module.exports = function arrayMap(arr, fn, thisArg) {
//    return arr.reduce(function(acc, item, index, arr) {
//        acc.push(fn.call(thisArg, item, index, arr))
//        return acc
//    }, [])
//}