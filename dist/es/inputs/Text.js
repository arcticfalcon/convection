'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _semanticUiReact = require('semantic-ui-react');

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Text = (0, _mobxReact.observer)(function (_ref) {
  var label = _ref.label,
      path = _ref.path,
      model = _ref.model,
      getter = _ref.getter,
      getErrors = _ref.getErrors,
      hasErrors = _ref.hasErrors,
      handleChange = _ref.handleChange,
      defaultValue = _ref.defaultValue,
      dynamicProps = _ref.dynamicProps,
      inline = _ref.inline,
      required = _ref.required,
      width = _ref.width,
      otherProps = _objectWithoutProperties(_ref, ['label', 'path', 'model', 'getter', 'getErrors', 'hasErrors', 'handleChange', 'defaultValue', 'dynamicProps', 'inline', 'required', 'width']);

  // const touched = model.isTouched(path)
  var doesHaveErrors = hasErrors ? hasErrors(path) : false;
  var calculatedProps = dynamicProps ? dynamicProps(model) : {};
  if (!getter) {
    getter = function getter(path) {
      return (0, _get2.default)(model, path, defaultValue);
    };
  }

  return _react2.default.createElement(
    _semanticUiReact.Form.Field,
    { error: doesHaveErrors, inline: inline, required: required, width: width },
    label || _react2.default.createElement(
      'label',
      null,
      path
    ),
    _react2.default.createElement(_semanticUiReact.Input, _extends({
      name: path,
      value: getter(path) || '',
      onChange: handleChange
    }, calculatedProps, otherProps)),
    doesHaveErrors && _react2.default.createElement(
      _semanticUiReact.Label,
      { basic: true, color: 'red', pointing: true },
      getErrors(path)
    )
  );
});

/*
 <Form.Input
 label={path}
 name={path}
 value={get(model, path)}
 onChange={model.handleChange}
 error={hasErrors}
 {...conditionalProps}
 {...otherProps}
 />
 */

Text.propTypes = {
  path: _propTypes2.default.string.isRequired,
  // label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  defaultValue: _propTypes2.default.string,
  getErrors: _propTypes2.default.func,
  hasErrors: _propTypes2.default.func,
  handleChange: _propTypes2.default.func,
  model: _propTypes2.default.object
};

Text.defaultProps = {
  defaultValue: ''
};

var _default = Text;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Text, 'Text', 'src/inputs/Text.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/inputs/Text.jsx');
}();

;