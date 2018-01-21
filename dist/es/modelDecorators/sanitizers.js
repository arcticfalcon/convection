'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var alpha = exports.alpha = function alpha(val) {
  return val.replace(/[^a-z\s]/gi, '');
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(alpha, 'alpha', 'src/modelDecorators/sanitizers.js');
}();

;