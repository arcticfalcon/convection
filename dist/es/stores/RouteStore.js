'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = require('mobx');

var _pathToRegexp = require('path-to-regexp');

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

var RouteStore = (_class = function () {
  function RouteStore() {
    _classCallCheck(this, RouteStore);

    _initDefineProp(this, 'routes', _descriptor, this);

    _initDefineProp(this, 'add', _descriptor2, this);
  }

  _createClass(RouteStore, [{
    key: 'get',
    value: function get(name, params) {
      if (!this.routes.has(name)) {
        throw new Error('Route ' + name + ' is not registered.');
      }

      try {
        return (0, _pathToRegexp.compile)(this.routes.get(name))(params);
      } catch (ex) {
        console.error(ex);
      }
    }
  }]);

  return RouteStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'routes', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return new Map();
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'add', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function (name, location) {
      if (_this.routes.has(name)) {
        throw new Error('Route ' + name + ' already registered.');
      }

      _this.routes.set(name, location);
    };
  }
})), _class);
var _default = RouteStore;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RouteStore, 'RouteStore', 'src/stores/RouteStore.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/stores/RouteStore.jsx');
}();

;