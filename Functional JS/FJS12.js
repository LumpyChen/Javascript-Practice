/**
 * Created by Lumpychen on 16/2/3.
 */
function Spy(target, method) {
    // SOLUTION GOES HERE
    target.count = 0;
    var oldFunc = target[ method ];
    target[method] = function() {
        target.count ++;
        return oldFunc.apply(target, arguments);
    }
    return target
}
module.exports = Spy;