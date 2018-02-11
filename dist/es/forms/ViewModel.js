'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

var _mobx = require('mobx');

var _set = require('lodash/set');

var _set2 = _interopRequireDefault(_set);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

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

var ViewModel = (_class = function () {
  function ViewModel(model, fetch, submitHandler, preSubmitHandler, postSubmitHandler, failedSubmitHandler) {
    var _this = this;

    _classCallCheck(this, ViewModel);

    _initDefineProp(this, 'busy', _descriptor, this);

    _initDefineProp(this, 'touched', _descriptor2, this);

    _initDefineProp(this, 'model', _descriptor3, this);

    this.isTouched = function () {
      return _this.__isTouched__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _initDefineProp(this, 'handleChange', _descriptor4, this);

    _initDefineProp(this, 'setProp', _descriptor5, this);

    this.getProp = function () {
      return _this.__getProp__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.debouncedValidate = (0, _debounce2.default)(function (path) {
      return _this.model.validate(path);
    }, 500);

    _initDefineProp(this, 'fetchSuccess', _descriptor6, this);

    _initDefineProp(this, 'fetchFailed', _descriptor7, this);

    _initDefineProp(this, 'submit', _descriptor8, this);

    this.model = model;
    this.fetch = fetch;
    this.submitHandler = submitHandler;
    this.preSubmitHandler = preSubmitHandler;
    this.postSubmitHandler = postSubmitHandler;
    this.failedSubmitHandler = failedSubmitHandler;
  }

  _createClass(ViewModel, [{
    key: '__isTouched__REACT_HOT_LOADER__',
    value: function __isTouched__REACT_HOT_LOADER__(path) {
      return path ? this.touched.includes(path) : this.touched.length > 0;
    }
  }, {
    key: '__getProp__REACT_HOT_LOADER__',
    value: function __getProp__REACT_HOT_LOADER__(path) {
      return (0, _get2.default)(this.model, path);
    }
  }, {
    key: 'init',
    value: function init(routeParams) {
      this.busy = true;
      this.fetch(routeParams).then(this.fetchSuccess).catch(this.fetchFailed);
    }
  }, {
    key: 'modelJSON',
    get: function get() {
      if (this.model.toJSON) {
        return this.model.toJSON();
      }
      return (0, _mobx.toJS)(this.model);
    }
  }]);

  return ViewModel;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'busy', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'touched', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'model', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'handleChange', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;

      _this2.setProp(name, value);
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'setProp', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (path, value) {
      (0, _set2.default)(_this3.model, path, value);

      if (!_this3.touched.includes(path)) {
        _this3.touched.push(path);
      }

      _this3.debouncedValidate(path);
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, 'modelJSON', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'modelJSON'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'init', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'init'), _class.prototype), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'fetchSuccess', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (_ref2) {
      var data = _ref2.data;

      (0, _mobx.extendObservable)(_this4.model, data);
      _this4.busy = false;
    };
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'fetchFailed', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (_ref3) {
      var data = _ref3.data;

      // ToDo: show error
      _this5.busy = false;
    };
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'submit', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function () {
      _this6.model.validate();

      if (!_this6.model.isValid) {
        return;
      }

      _this6.busy = true;

      // pre Submit
      if (_this6.preSubmitHandler) {
        _this6.preSubmitHandler(_this6);
      }

      _this6.submitHandler(_this6.model, _this6).then((0, _mobx.action)(function (response) {
        // post Submit
        if (_this6.postSubmitHandler) {
          _this6.postSubmitHandler(_this6, response);
        }

        _this6.busy = false;
      })).catch((0, _mobx.action)(function (response) {
        // failed submit
        if (_this6.failedSubmitHandler) {
          _this6.failedSubmitHandler(_this6, response);
        }

        _this6.busy = false;
      }));
    };
  }
})), _class);
var _default = ViewModel;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ViewModel, 'ViewModel', 'src/forms/ViewModel.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/forms/ViewModel.jsx');
}();

;