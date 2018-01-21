'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Submit = (0, _mobxReact.observer)(function (props) {
  return _react2.default.createElement(_semanticUiReact.Button, { content: 'Submit' });
});

Submit.propTypes = {};

Submit.defaultProps = {};

var _default = Submit;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Submit, 'Submit', 'src/inputs/Submit.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/inputs/Submit.jsx');
}();

;