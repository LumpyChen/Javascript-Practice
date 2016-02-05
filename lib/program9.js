"use strict";

var _templateObject = _taggedTemplateLiteral(["<b>", " says</b>: \"", "\""], ["<b>", " says</b>: \"", "\""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

console.log(html(_templateObject, process.argv[2], process.argv[3]));

function html(pieces) {
    var result = pieces[0];

    for (var _len = arguments.length, substitutions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        substitutions[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
}