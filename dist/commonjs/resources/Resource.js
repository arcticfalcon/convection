'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _RootStore = require('../stores/RootStore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function buildRoute(path, Component, props) {
  return _react2.default.createElement(_reactRouterDom.Route, {
    key: path,
    exact: true,
    path: path,
    render: function render(routerProps) {
      return _react2.default.createElement(Component, _extends({}, props, routerProps));
    }
  });
}

var Resource = (0, _reactRouterDom.withRouter)(_class = (0, _RootStore.injectRouteStore)(_class = function (_React$Component) {
  _inherits(Resource, _React$Component);

  function Resource(props) {
    _classCallCheck(this, Resource);

    var _this = _possibleConstructorReturn(this, (Resource.__proto__ || Object.getPrototypeOf(Resource)).call(this, props));

    _this.registerRoutes = function () {
      return _this.__registerRoutes__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    console.log(_this);
    _this.registerRoutes(_this.props);
    return _this;
  }

  _createClass(Resource, [{
    key: '__registerRoutes__REACT_HOT_LOADER__',
    value: function __registerRoutes__REACT_HOT_LOADER__(props) {
      if (props.browse) {
        props.routeStore.add(props.name + ':browse', props.path + '/browse');
      }
      if (props.read) {
        props.routeStore.add(props.name + ':read', props.path + '/:id');
      }
      if (props.edit) {
        props.routeStore.add(props.name + ':edit', props.path + '/:id/edit');
      }
      if (props.add) {
        props.routeStore.add(props.name + ':add', props.path + '/add');
      }
      if (props.deleter) {
        props.routeStore.add(props.name + ':delete', props.path + '/:id/delete');
      }
      // props.actions.forEach(action => props.routeStore.add(`${action.name}`, `${action.path}`))
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          path = _props.path,
          browse = _props.browse,
          read = _props.read,
          edit = _props.edit,
          add = _props.add,
          deleter = _props.deleter,
          _props$actions = _props.actions,
          actions = _props$actions === undefined ? [] : _props$actions;

      var routes = actions.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
            actionName = _ref2[0],
            actionPath = _ref2[1],
            component = _ref2[2];

        return buildRoute(path, component, {});
      });

      if (browse) {
        routes.push(buildRoute(path + '/browse', browse, {}));
      }
      if (read) {
        routes.push(buildRoute(path + '/:id', read, {}));
      }
      if (edit) {
        routes.push(buildRoute(path + '/:id/edit', edit, {}));
      }
      if (add) {
        routes.push(buildRoute(path + '/add', add, {}));
      }
      if (deleter) {
        routes.push(buildRoute(path + '/:id/delete', deleter, {}));
      }

      return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        routes
      );
    }
  }]);

  return Resource;
}(_react2.default.Component)) || _class) || _class;

Resource.propTypes = {
  name: _propTypes2.default.string.isRequired,
  path: _propTypes2.default.string,
  browse: _propTypes2.default.func,
  read: _propTypes2.default.func,
  edit: _propTypes2.default.func,
  add: _propTypes2.default.func,
  deleter: _propTypes2.default.func,
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    path: _propTypes2.default.string,
    component: _propTypes2.default.element.isRequired
  }))
};

Resource.defaultProps = {
  actions: []
};

var _default = Resource;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(buildRoute, 'buildRoute', 'src/resources/Resource.jsx');

  __REACT_HOT_LOADER__.register(Resource, 'Resource', 'src/resources/Resource.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/resources/Resource.jsx');
}();

;