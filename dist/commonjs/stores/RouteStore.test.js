'use strict';

var _RouteStore = require('./RouteStore');

var _RouteStore2 = _interopRequireDefault(_RouteStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('adds 1 + 2 to equal 3', function () {
  var store = new _RouteStore2.default();

  var loc = store.resolveLocation({ name: 'ASD', params: { id: 321 } });

  expect(loc).toBe(3);
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;