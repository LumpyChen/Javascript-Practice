/**
 * Created by Lumpychen on 16/2/3.
 */
function sub_curry(fn
                   /*, variable number of args */
) {
    var args = [].slice.call(arguments, 1);
    return function () {
        return fn.apply(this, args.concat(Object.keys(arguments)));
    };
}

function curryN(fn, length) {

// capture fn's # of parameters
    length = length || fn.length;
    return function () {
        if (arguments.length < length) {

// not all arguments have been specified. Curry once more.
            var combined = [fn].concat(Object.keys(arguments));
            return length - arguments.length > 0
                ? curryN(sub_curry.apply(this, combined), length - arguments.length)
                : sub_curry.call(this, combined );
        } else {

// all arguments have been specified, actually call function
            return fn.apply(this, arguments);
        }
    };
}

module.exports = curryN;