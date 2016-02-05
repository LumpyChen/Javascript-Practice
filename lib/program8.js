'use strict';

module.exports = function (sent) {
  var lengthe = arguments.length <= 1 || arguments[1] === undefined ? sent.length : arguments[1];
  return '' + sent + '!'.repeat(lengthe);
};