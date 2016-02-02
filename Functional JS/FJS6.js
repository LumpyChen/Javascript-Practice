/**
 * Created by Lumpychen on 16/2/3.
 */
function countWords (inputWords) {
    var outputWords = {};
    inputWords.reduce(function(prevValue, currValue) {
        if(outputWords.hasOwnProperty(currValue))
            ++outputWords[currValue];
        else {
            outputWords[currValue]=1;
        }
    }, 'undefined');

    return outputWords
}

//function countWords(arr) {
//    return arr.reduce(function(countMap, word) {
//        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//        return countMap
//    }, {}) // second argument to reduce initialises countMap to {}
//}

module.exports = countWords;

