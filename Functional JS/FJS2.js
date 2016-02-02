/**
 * Created by Lumpychen on 16/1/30.
 */
function Repeat(operation, num){
    if (num != 0) {
        operation();
        Repeat(operation, --num)
    }
}

module .exports = Repeat;