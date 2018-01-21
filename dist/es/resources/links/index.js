'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteLink = exports.AddLink = exports.EditLink = exports.ReadLink = exports.BrowseLink = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactRouterDom = require('react-router-dom');

var _RootStore = require('../../stores/RootStore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Link = function Link(_ref) {
  var action = _ref.action,
      resourceName = _ref.resourceName,
      routeStore = _ref.routeStore,
      children = _ref.children,
      params = _objectWithoutProperties(_ref, ['action', 'resourceName', 'routeStore', 'children']);

  // if (!routeStore.routes.has(`${resourceName}:${action}`)) {
  //   throw new Error(`${action} route for ${resourceName} is not registered.`)
  // }
  return _react2.default.createElement(
    _reactRouterDom.NavLink,
    { to: routeStore.get(resourceName + ':' + action, params) },
    children
  );
};

Link.propTypes = {
  action: _propTypes2.default.string.isRequired,
  resourceName: _propTypes2.default.string.isRequired
};

var LinkWithRouteStore = (0, _RootStore.injectRouteStore)(Link);

var BrowseLink = exports.BrowseLink = function BrowseLink(props) {
  return _react2.default.createElement(LinkWithRouteStore, _extends({ action: 'browse' }, props));
};
var ReadLink = exports.ReadLink = function ReadLink(props) {
  return _react2.default.createElement(LinkWithRouteStore, _extends({ action: 'read' }, props));
};
var EditLink = exports.EditLink = function EditLink(props) {
  return _react2.default.createElement(LinkWithRouteStore, _extends({ action: 'edit' }, props));
};
var AddLink = exports.AddLink = function AddLink(props) {
  return _react2.default.createElement(LinkWithRouteStore, _extends({ action: 'add' }, props));
};
var DeleteLink = exports.DeleteLink = function DeleteLink(props) {
  return _react2.default.createElement(LinkWithRouteStore, _extends({ action: 'delete' }, props));
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Link, 'Link', 'src/resources/links/index.js');

  __REACT_HOT_LOADER__.register(LinkWithRouteStore, 'LinkWithRouteStore', 'src/resources/links/index.js');

  __REACT_HOT_LOADER__.register(BrowseLink, 'BrowseLink', 'src/resources/links/index.js');

  __REACT_HOT_LOADER__.register(ReadLink, 'ReadLink', 'src/resources/links/index.js');

  __REACT_HOT_LOADER__.register(EditLink, 'EditLink', 'src/resources/links/index.js');

  __REACT_HOT_LOADER__.register(AddLink, 'AddLink', 'src/resources/links/index.js');

  __REACT_HOT_LOADER__.register(DeleteLink, 'DeleteLink', 'src/resources/links/index.js');
}();

;