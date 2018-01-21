"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var numericRegexp = /^\d*$/;
var numeric = exports.numeric = numericRegexp.test.bind(numericRegexp);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(numericRegexp, "numericRegexp", "src/modelDecorators/validators.js");

  __REACT_HOT_LOADER__.register(numeric, "numeric", "src/modelDecorators/validators.js");
}();

;