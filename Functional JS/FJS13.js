/**
 * Created by Lumpychen on 16/2/3.
 */
function repeat(operation, num) {
    if (num <= 0) {
        return;
    }
    operation();
    setTimeout(function () {
        repeat(operation, --num);
    }, 1);
}

module.exports = repeat;