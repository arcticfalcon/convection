'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = require('mobx');

var _classValidator = require('class-validator');

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _values = require('lodash/values');

var _values2 = _interopRequireDefault(_values);

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

var ModelValidation = (_class = function () {
  function ModelValidation() {
    var _this = this;

    _classCallCheck(this, ModelValidation);

    _initDefineProp(this, 'errors', _descriptor, this);

    _initDefineProp(this, 'validate', _descriptor2, this);

    this.hasErrors = function () {
      return _this.__hasErrors__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.getErrors = function () {
      return _this.__getErrors__REACT_HOT_LOADER__.apply(_this, arguments);
    };
  }

  _createClass(ModelValidation, [{
    key: '__hasErrors__REACT_HOT_LOADER__',
    value: function __hasErrors__REACT_HOT_LOADER__(path) {
      return this.errors.has(path);
    }
  }, {
    key: '__getErrors__REACT_HOT_LOADER__',
    value: function __getErrors__REACT_HOT_LOADER__(path) {
      return (0, _values2.default)(this.errors.get(path));
    }
  }, {
    key: 'isValid',
    get: function get() {
      return this.errors.size === 0;
    }
  }, {
    key: 'flatErrors',
    get: function get() {
      return (0, _flatten2.default)(this.errors.values());
    }
  }]);

  return ModelValidation;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'errors', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return new Map();
  }
}), _applyDecoratedDescriptor(_class.prototype, 'isValid', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'isValid'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flatErrors', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'flatErrors'), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'validate', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (path) {
      if (path) {
        _this2.errors.delete(path);

        return;
      }

      _this2.errors.clear();

      (0, _classValidator.validateSync)(_this2).forEach(function (error) {
        return _this2.errors.set(error.property, error.constraints);
      });

      // validateAsync(this.model).then(
      //   action(errors => {
      //     errors.forEach(error => this.errors.set(error.property, error.constraints))
      //   })
      // )
    };
  }
})), _class);
var _default = ModelValidation;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ModelValidation, 'ModelValidation', 'src/forms/ModelValidation.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/forms/ModelValidation.jsx');
}();

;