'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncHistoryWithStore = exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor;

var _mobx = require('mobx');

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _pathToRegexp = require('path-to-regexp');

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

var HistoryStore = (_class = function () {
  function HistoryStore() {
    var _this = this;

    _classCallCheck(this, HistoryStore);

    _initDefineProp(this, 'location', _descriptor, this);

    this.history = null;

    this.build = function () {
      return _this.__build__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.push = function () {
      return _this.__push__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.replace = function () {
      return _this.__replace__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.go = function () {
      return _this.__go__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.goBack = function () {
      return _this.__goBack__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.goForward = function () {
      return _this.__goForward__REACT_HOT_LOADER__.apply(_this, arguments);
    };
  }

  _createClass(HistoryStore, [{
    key: '_updateLocation',
    value: function _updateLocation(newState) {
      this.location = newState;
    }

    // build = (location, params) => {
    //   console.log(location, params)
    //   // let name
    //   // if (typeof location === 'string') {
    //   //   if (location[0] !== '/') {
    //   //     name = location
    //   //   }
    //   // } else {
    //   //   name = location.name
    //   // }
    //   // if (!name) {
    //   //   return location
    //   // }
    //
    //   const route = routes[location]
    //   invariant(route, 'Unknown route: %s', location)
    //
    //   return {
    //     // ...location,
    //     pathname: compile(route)(params),
    //   }
    // }

    // ToDo: move to RouteStore?

  }, {
    key: '__build__REACT_HOT_LOADER__',


    /*
     * History methods
     */
    value: function __build__REACT_HOT_LOADER__(route, params) {
      return _extends({}, params, {
        pathname: (0, _pathToRegexp.compile)(route)(params)
      });
    }
  }, {
    key: '__push__REACT_HOT_LOADER__',
    value: function __push__REACT_HOT_LOADER__(location, params) {
      this.history.push(this.build(location, params));
    }
  }, {
    key: '__replace__REACT_HOT_LOADER__',
    value: function __replace__REACT_HOT_LOADER__(location, params) {
      this.history.replace(this.build(location, params));
    }
  }, {
    key: '__go__REACT_HOT_LOADER__',
    value: function __go__REACT_HOT_LOADER__(n) {
      this.history.go(n);
    }
  }, {
    key: '__goBack__REACT_HOT_LOADER__',
    value: function __goBack__REACT_HOT_LOADER__() {
      this.history.goBack();
    }
  }, {
    key: '__goForward__REACT_HOT_LOADER__',


    //   function createPath(location) {
    //   return history.createPath(resolveLocation(location));
    // }
    //
    //   function createHref(location) {
    //   return history.createHref(resolveLocation(location));
    // }
    //
    //   function createLocation(location, ...args) {
    //   return history.createLocation(resolveLocation(location), ...args);
    // }
    value: function __goForward__REACT_HOT_LOADER__() {
      this.history.goForward();
    }
  }]);

  return HistoryStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'location', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, '_updateLocation', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, '_updateLocation'), _class.prototype)), _class);
exports.default = HistoryStore;
var syncHistoryWithStore = exports.syncHistoryWithStore = function syncHistoryWithStore(history, store) {
  // Initialise store
  store.history = history;

  // Handle update from history object
  var handleLocationChange = function handleLocationChange(location) {
    store._updateLocation(location);
  };

  var unsubscribeFromHistory = history.listen(handleLocationChange);
  handleLocationChange(history.location);

  var subscribe = function subscribe(listener) {
    var onStoreChange = function onStoreChange(change) {
      var rawLocation = _extends({}, store.location);
      listener(rawLocation, history.action);
    };

    // Listen for changes to location state in store
    var unsubscribeFromStore = (0, _mobx.observe)(store, 'location', onStoreChange);

    listener(store.location, history.action);

    return function () {
      unsubscribeFromStore();
    };
  };
  var unsubscribe = function unsubscribe() {
    return unsubscribeFromHistory();
  };

  history.subscribe = subscribe;
  history.unsubscribe = unsubscribe;

  return history;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HistoryStore, 'HistoryStore', 'src/routing/History.js');

  __REACT_HOT_LOADER__.register(syncHistoryWithStore, 'syncHistoryWithStore', 'src/routing/History.js');
}();

;