/**
     * Created by Lumpychen on 16/1/30.
     */
function doubleAll(num){
    var result = [];
    num.map(function(number){
        result.push(number*2)
    });
    return result;

}

module.exports=doubleAll;

