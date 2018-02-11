'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactRouterDom = require('react-router-dom');

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.init = function () {
      var _this2;

      return (_this2 = _this).__init__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.init(this.props);
    }
  }, {
    key: '__init__REACT_HOT_LOADER__',

    // componentWillUpdate(newProps) {
    //   this.fetch(newProps)
    // }

    value: function __init__REACT_HOT_LOADER__(props) {
      props.viewModel.init(props.match.params);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          viewModel = _props.viewModel,
          submit = _props.submit,
          FormComponent = _props.as,
          match = _props.match,
          location = _props.location,
          history = _props.history,
          staticContext = _props.staticContext,
          otherProps = _objectWithoutProperties(_props, ['children', 'viewModel', 'submit', 'as', 'match', 'location', 'history', 'staticContext']);

      var childrenWithModel = _react2.default.Children.map(children, function (child) {
        return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, {
          model: viewModel.model,
          getter: viewModel.getProp,
          getErrors: viewModel.model.getErrors,
          hasErrors: viewModel.model.hasErrors,
          handleChange: viewModel.handleChange
        }) : child;
      });

      return _react2.default.createElement(
        FormComponent,
        _extends({
          onSubmit: submit,
          loading: viewModel.busy,
          error: !viewModel.model.isValid
        }, otherProps),
        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'common.welcome', values: { name: 'Nombre', unreadCount: 2 } }),
        childrenWithModel
      );
    }
  }]);

  return Form;
}(_react2.default.Component)) || _class;

Form.propTypes = {
  viewModel: _propTypes2.default.shape({
    model: _propTypes2.default.object,
    getProp: _propTypes2.default.func,
    handleChange: _propTypes2.default.func,
    busy: _propTypes2.default.bool
  }).isRequired,
  submit: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  as: _propTypes2.default.func.isRequired
};

var _default = (0, _reactRouterDom.withRouter)(Form);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Form, 'Form', 'src/resources/Form.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/resources/Form.jsx');
}();

;