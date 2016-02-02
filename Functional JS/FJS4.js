/**
 * Created by Lumpychen on 16/1/30.
 */

function getShortMessages(messages) {
    // SOLUTION GOES HERE

    return messages.filter(function(sentence){
        return sentence.message.length<50;
    }).map(function(prop) {
        return prop.message;
    })
}

module.exports = getShortMessages;

