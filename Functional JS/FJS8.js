/**
 * Created by Lumpychen on 16/2/3.
 */
function duckCount() {
    // SOLUTION GOES HERE
    return [].slice.call(arguments).filter(function (argv) {
        return Object.hasOwnProperty.call(argv,"quack");
    }).length
}

module.exports = duckCount