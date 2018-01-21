'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Text = (0, _mobxReact.observer)(function (_ref) {
  var getter = _ref.getter,
      path = _ref.path,
      model = _ref.model,
      defaultValue = _ref.defaultValue,
      props = _objectWithoutProperties(_ref, ['getter', 'path', 'model', 'defaultValue']);

  if (!getter) {
    getter = function getter(path) {
      return (0, _get2.default)(model, path, defaultValue);
    };
  }

  return _react2.default.createElement(
    'span',
    null,
    getter(path)
  );
});

Text.propTypes = {
  path: _propTypes2.default.string.isRequired,
  // label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  defaultValue: _propTypes2.default.string,
  model: _propTypes2.default.object.isRequired
};

Text.defaultProps = {
  model: {},
  defaultValue: ''
};

var _default = Text;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Text, 'Text', 'src/formatters/Text.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/formatters/Text.jsx');
}();

;