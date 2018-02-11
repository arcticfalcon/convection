'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;

var _mobx = require('mobx');

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

var FilterStore = (_class = function () {
  function FilterStore(fetch) {
    var _this = this;

    _classCallCheck(this, FilterStore);

    _initDefineProp(this, 'fields', _descriptor, this);

    _initDefineProp(this, 'data', _descriptor2, this);

    _initDefineProp(this, 'busy', _descriptor3, this);

    _initDefineProp(this, 'sort', _descriptor4, this);

    _initDefineProp(this, 'page', _descriptor5, this);

    _initDefineProp(this, 'pageCount', _descriptor6, this);

    _initDefineProp(this, 'perPage', _descriptor7, this);

    _initDefineProp(this, 'handleChange', _descriptor8, this);

    this.getProp = function () {
      return _this.__getProp__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _initDefineProp(this, 'handleSort', _descriptor9, this);

    _initDefineProp(this, 'setPage', _descriptor10, this);

    _initDefineProp(this, 'reset', _descriptor11, this);

    _initDefineProp(this, 'fetchSuccess', _descriptor12, this);

    _initDefineProp(this, 'fetchFailed', _descriptor13, this);

    _initDefineProp(this, 'submit', _descriptor14, this);

    this.isValid = function () {
      return _this.__isValid__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.fetchPromise = fetch;
  }

  _createClass(FilterStore, [{
    key: '__getProp__REACT_HOT_LOADER__',
    value: function __getProp__REACT_HOT_LOADER__(path) {
      return this.fields.get(path);
    }
  }, {
    key: 'getSort',
    value: function getSort(path) {
      return this.sort.column === path ? this.sort.direction : 0;
    }
  }, {
    key: 'init',
    value: function init() {
      this.fetch();
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      this.busy = true;

      this.fetchPromise(this.fields, this.sort, this.page).then(this.fetchSuccess).catch(this.fetchFailed);
    }
  }, {
    key: '__isValid__REACT_HOT_LOADER__',
    value: function __isValid__REACT_HOT_LOADER__() {
      return true;
    }
  }, {
    key: 'model',
    get: function get() {
      return this.fields;
    }
  }]);

  return FilterStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'fields', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return new Map();
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'data', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'busy', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'sort', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      column: undefined,
      direction: 1
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'page', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'pageCount', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'perPage', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 10;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'handleChange', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;

      _this2.fields.set(name, value);
    };
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'handleSort', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (path) {
      if (_this3.sort.column === path) {
        // Toggle direction
        _this3.sort.direction = _this3.sort.direction * -1;
      } else {
        // Change sort
        _this3.sort.column = path;
      }

      _this3.fetch();
    };
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'setPage', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (page) {
      return _this4.page = page;
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, 'init', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'init'), _class.prototype), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'reset', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function () {
      _this5.fields.clear();
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, 'model', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'model'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fetch', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'fetch'), _class.prototype), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'fetchSuccess', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (_ref2) {
      var data = _ref2.data,
          total = _ref2.total;

      _this6.data = data;
      _this6.pageCount = Math.ceil(total / _this6.perPage);
      _this6.busy = false;
    };
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'fetchFailed', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function (_ref3) {
      var data = _ref3.data;

      // ToDo: show error
      _this7.busy = false;
    };
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'submit', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this8 = this;

    return function () {
      _this8.fetch();
    };
  }
})), _class);
var _default = FilterStore;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FilterStore, 'FilterStore', 'src/stores/FilterStore.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/stores/FilterStore.js');
}();

;