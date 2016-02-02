/**
 * Created by Lumpychen on 16/2/3.
 */
function reduce(arr,fn,initial) {
    // SOLUTION GOES HERE
    if (!arr.length) return initial
    initial = fn(initial, arr[0])
    return reduce(arr.slice(1),fn,initial)
}

module.exports = reduce

//function reduce(arr, fn, initial) {
//    return (function reduceOne(index, value) {
//        if (index > arr.length - 1) return value // end condition
//        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//    })(0, initial) // IIFE. kick off recursion with initial values
//}