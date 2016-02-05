"use strict";

{
	var inputs = process.argv.slice(2);
	var results = inputs.map(function (x) {
		return x.slice(0, 1);
	}).reduce(function (x, y) {
		return x.concat(y);
	});
	console.log("[" + inputs + "] becomes \"" + results + "\"");
}