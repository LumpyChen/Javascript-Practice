"use strict";

{
	module.exports = function average() {
		var result = 0;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		args.forEach(function (x) {
			return result += x;
		});
		return result / args.length;
	};
}