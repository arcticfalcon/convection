'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectRouteStore = undefined;

var _mobxReact = require('mobx-react');

var _RouteStore = require('../stores/RouteStore');

var _RouteStore2 = _interopRequireDefault(_RouteStore);

var _History = require('../routing/History');

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RootStore = function RootStore() {
  _classCallCheck(this, RootStore);

  this.routeStore = new _RouteStore2.default();
  this.historyStore = new _History2.default();
};

var _default = RootStore;
exports.default = _default;
var injectRouteStore = exports.injectRouteStore = function injectRouteStore(component) {
  return (0, _mobxReact.inject)(function (_ref) {
    var rootStore = _ref.rootStore;
    return {
      routeStore: rootStore.routeStore
    };
  })(component);
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RootStore, 'RootStore', 'src/stores/RootStore.js');

  __REACT_HOT_LOADER__.register(injectRouteStore, 'injectRouteStore', 'src/stores/RootStore.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/stores/RootStore.js');
}();

;