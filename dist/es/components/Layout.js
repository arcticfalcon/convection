'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(_ref) {
  var title = _ref.title,
      actions = _ref.actions,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    title,
    children,
    actions
  );
};

Layout.propTypes = {
  title: _propTypes2.default.string.isRequired
  // actions: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

var _default = Layout;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Layout, 'Layout', 'src/components/Layout.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Layout.jsx');
}();

;