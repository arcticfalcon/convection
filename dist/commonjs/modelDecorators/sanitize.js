'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sanitize;
exports.initSanitizers = initSanitizers;

var _mobx = require('mobx');

var sanitizers = new Map();

function sanitize(sanitizer) {
  if (!sanitizer) {
    throw new Error('@sanitize must be called with sanitizer argument');
  }

  return function (target, property, description) {
    if (!sanitizers.has(target.constructor)) {
      sanitizers.set(target.constructor, []);
    }

    sanitizers.get(target.constructor).push(function (object) {
      (0, _mobx.intercept)(object, property, function (change) {
        change.newValue = sanitizer(change.newValue);

        return change;
      });
    });
  };
}

function initSanitizers(object) {
  // Probably does not work with class inheritance
  sanitizers.get(object.constructor).forEach(function (init) {
    return init(object);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(sanitizers, 'sanitizers', 'src/modelDecorators/sanitize.js');

  __REACT_HOT_LOADER__.register(sanitize, 'sanitize', 'src/modelDecorators/sanitize.js');

  __REACT_HOT_LOADER__.register(initSanitizers, 'initSanitizers', 'src/modelDecorators/sanitize.js');
}();

;