"use strict";

{
	module.exports = function () {
		var Lbound = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
		var Hbound = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
		return (Lbound + Hbound) / 2;
	};
}