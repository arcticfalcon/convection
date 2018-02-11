'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _desc, _value, _class2, _descriptor;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobx = require('mobx');

var _mobxReact = require('mobx-react');

var _reactRouter = require('react-router');

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactIntl = require('react-intl');

var _RootStore = require('./stores/RootStore');

var _RootStore2 = _interopRequireDefault(_RootStore);

var _History = require('./routing/History');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var rootStore = new _RootStore2.default();
var browserHistory = (0, _createBrowserHistory2.default)();
var history = (0, _History.syncHistoryWithStore)(browserHistory, rootStore.historyStore);

var messages = {
  'common.welcome': 'The default locale of this example app.'
};

var Admin = (0, _mobxReact.observer)(_class = (_class2 = function (_React$Component) {
  _inherits(Admin, _React$Component);

  function Admin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Admin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Admin.__proto__ || Object.getPrototypeOf(Admin)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'menu', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Admin, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Defer menu rendering so resources register routes
      this.menu = this.props.menu;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          Layout = _props.layout;


      return _react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: 'en', messages: messages },
        _react2.default.createElement(
          _mobxReact.Provider,
          { rootStore: rootStore },
          _react2.default.createElement(
            _reactRouter.Router,
            { history: history },
            _react2.default.createElement(Layout, { menu: this.menu, content: children })
          )
        )
      );
    }
  }]);

  return Admin;
}(_react2.default.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'menu', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, 'componentDidMount', [_mobx.action], Object.getOwnPropertyDescriptor(_class2.prototype, 'componentDidMount'), _class2.prototype)), _class2)) || _class;

var BasicLayout = function BasicLayout(_ref2) {
  var menu = _ref2.menu,
      content = _ref2.content;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: { width: '20%', float: 'left' } },
      menu
    ),
    _react2.default.createElement(
      'div',
      { style: { width: '80%', float: 'left' } },
      content
    )
  );
};

// const Admin = ({ menu, children }) => {
//   console.log('admin')
//   return (
//     <Router>
//       <div>
//         {menu}
//         {children}
//       </div>
//     </Router>
//   )
// }

Admin.propTypes = {
  // children: PropTypes.arrayOf(
  // PropTypes.oneOfType([
  //   PropTypes.instanceOf(Resource),
  // PropTypes.instanceOf(Action)
  // ])
  // ),
  menu: _propTypes2.default.element.isRequired,
  layout: _propTypes2.default.func.isRequired
};

Admin.defaultProps = {
  layout: BasicLayout
};

var _default = Admin;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(rootStore, 'rootStore', 'src/Admin.jsx');

  __REACT_HOT_LOADER__.register(browserHistory, 'browserHistory', 'src/Admin.jsx');

  __REACT_HOT_LOADER__.register(history, 'history', 'src/Admin.jsx');

  __REACT_HOT_LOADER__.register(messages, 'messages', 'src/Admin.jsx');

  __REACT_HOT_LOADER__.register(Admin, 'Admin', 'src/Admin.jsx');

  __REACT_HOT_LOADER__.register(BasicLayout, 'BasicLayout', 'src/Admin.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Admin.jsx');
}();

;