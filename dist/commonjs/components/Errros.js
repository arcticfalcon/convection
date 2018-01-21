'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Errors = (0, _mobxReact.observer)(function (_ref) {
  var model = _ref.model;
  return _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Errors', content: model.flatErrors });
});

var _default = Errors;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Errors, 'Errors', 'src/components/Errros.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Errros.jsx');
}();

;