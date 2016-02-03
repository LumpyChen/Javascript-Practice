/**
 * Created by Lumpychen on 16/2/3.
 */
function curryN(fn, n) {
    // SOLUTION GOES HERE
    var num = fn.length;
    if (num<=0)
    return;
    else
    --num;
    return curryN(fn,n);
}

module.exports = curryN