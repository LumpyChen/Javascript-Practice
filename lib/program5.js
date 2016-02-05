"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
	var _Math;

	var inputs = process.argv.slice(2);
	var min = (_Math = Math).min.apply(_Math, _toConsumableArray(inputs));
	console.log("The minimum of [" + inputs + "] is " + min);
}