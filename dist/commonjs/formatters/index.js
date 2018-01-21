'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Formatters = {
  Text: _Text2.default
};

var _default = Formatters;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Formatters, 'Formatters', 'src/formatters/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/formatters/index.js');
}();

;