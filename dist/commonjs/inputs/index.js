'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Submit = require('./Submit');

var _Submit2 = _interopRequireDefault(_Submit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Inputs = {
  Text: _Text2.default,
  Submit: _Submit2.default
};

var _default = Inputs;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Inputs, 'Inputs', 'src/inputs/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/inputs/index.js');
}();

;