'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var WithModel = function WithModel(_ref) {
  var as = _ref.as,
      render = _ref.render,
      children = _ref.children,
      model = _ref.model,
      getter = _ref.getter,
      getErrors = _ref.getErrors,
      hasErrors = _ref.hasErrors,
      handleChange = _ref.handleChange,
      props = _objectWithoutProperties(_ref, ['as', 'render', 'children', 'model', 'getter', 'getErrors', 'hasErrors', 'handleChange']);

  if (render) {
    return render(model);
  }

  var Element = as;
  var childrenWithModel = _react2.default.Children.map(children, function (child) {
    return _react2.default.cloneElement(child, {
      model: model,
      getter: getter,
      getErrors: getErrors,
      hasErrors: hasErrors,
      handleChange: handleChange
    });
  });

  return _react2.default.createElement(
    Element,
    props,
    childrenWithModel
  );
};

var _default = WithModel;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WithModel, 'WithModel', 'src/forms/WithModel.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/forms/WithModel.jsx');
}();

;