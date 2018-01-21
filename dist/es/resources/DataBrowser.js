'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobx = require('mobx');

var _mobxReact = require('mobx-react');

var _semanticUiReact = require('semantic-ui-react');

var _segmentize = require('segmentize');

var _segmentize2 = _interopRequireDefault(_segmentize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function buildPagination(page, pages, setPageHandle) {
  var handleItemClick = function handleItemClick(e, _ref) {
    var name = _ref.name;
    return setPageHandle(name);
  };
  var segments = (0, _segmentize2.default)({
    page: page,
    pages: pages,
    beginPages: 1,
    endPages: 1,
    sidePages: 1
  });

  return _react2.default.createElement(
    _semanticUiReact.Menu,
    { pagination: true },
    segments.beginPages.map(function (page) {
      return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: page, active: false, onClick: handleItemClick });
    }),
    segments.previousPages.length && Math.min.apply(Math, _toConsumableArray(segments.previousPages)) - Math.max.apply(Math, _toConsumableArray(segments.beginPages)) > 1 ? _react2.default.createElement(
      _semanticUiReact.Menu.Item,
      { disabled: true },
      '...'
    ) : null,
    segments.previousPages.map(function (page) {
      return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: page, active: false, onClick: handleItemClick });
    }),
    segments.centerPage.map(function (page) {
      return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: page, active: true, onClick: handleItemClick });
    }),
    segments.nextPages.map(function (page) {
      return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: page, active: false, onClick: handleItemClick });
    }),
    segments.nextPages.length && Math.min.apply(Math, _toConsumableArray(segments.endPages)) - Math.max.apply(Math, _toConsumableArray(segments.nextPages)) > 1 ? _react2.default.createElement(
      _semanticUiReact.Menu.Item,
      { disabled: true },
      '...'
    ) : null,
    segments.endPages.map(function (page) {
      return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: page, active: false, onClick: handleItemClick });
    })
  );
}

var DataGrid = function DataGrid(_ref2) {
  var headers = _ref2.headers,
      data = _ref2.data,
      renderBodyRow = _ref2.renderBodyRow,
      otherProps = _objectWithoutProperties(_ref2, ['headers', 'data', 'renderBodyRow']);

  return _react2.default.createElement(_semanticUiReact.Table, _extends({
    celled: true,
    sortable: true,
    headerRow: headers,
    renderBodyRow: renderBodyRow,
    tableData: data
  }, otherProps));
};

var buildRowRenderer = function buildRowRenderer(children) {
  return function (row, i) {
    // children.forEach(element => {
    //   if (typeof element == 'function') {
    //     return element(row)
    //   }
    //
    //   return {
    //     content: React.cloneElement(child, { model: row }),
    //     key,
    //   }
    // })
    var cells = _react2.default.Children.map(children, function (child, key) {
      return {
        content: _react2.default.cloneElement(child, { model: row }),
        key: key
      };
    });

    return {
      key: 'row-' + i,
      // warning: !!(status && status.match('Requires Action')),
      cells: cells
    };
  };
};

var buildHeaders = function buildHeaders(children, filterModel) {
  return _react2.default.Children.map(children, function (child) {
    var sort = void 0;
    switch (filterModel.getSort(child.props.path)) {
      case 1:
        sort = 'ascending';
        break;
      case -1:
        sort = 'descending';
        break;
    }
    return _react2.default.createElement(
      _semanticUiReact.Table.HeaderCell,
      { onClick: function onClick() {
          return filterModel.handleSort(child.props.path);
        }, sorted: sort },
      child.props.path
    );

    return child.props.label || child.props.path;
  });
};

var DataBrowser = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(DataBrowser, _React$Component);

  function DataBrowser() {
    _classCallCheck(this, DataBrowser);

    return _possibleConstructorReturn(this, (DataBrowser.__proto__ || Object.getPrototypeOf(DataBrowser)).apply(this, arguments));
  }

  _createClass(DataBrowser, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Grid = _props.Grid,
          children = _props.children,
          headerBuilder = _props.headerBuilder,
          rowRendererBuilder = _props.rowRendererBuilder,
          filterModel = _props.filterModel,
          filters = _props.filters,
          sortable = _props.sortable,
          paginationBuilder = _props.paginationBuilder,
          otherProps = _objectWithoutProperties(_props, ['Grid', 'children', 'headerBuilder', 'rowRendererBuilder', 'filterModel', 'filters', 'sortable', 'paginationBuilder']);

      return _react2.default.createElement(
        'div',
        null,
        filters,
        _react2.default.createElement(Grid, _extends({
          headers: headerBuilder(children, filterModel),
          data: filterModel.data.peek(),
          renderBodyRow: rowRendererBuilder(children)
        }, otherProps)),
        paginationBuilder(filterModel.page, filterModel.pages, filterModel.setPage)
      );
    }
  }]);

  return DataBrowser;
}(_react2.default.Component)) || _class;

DataBrowser.propTypes = {
  // filters: PropTypes.string.isRequired,
  // sortable: PropTypes.string.isRequired,
  Grid: _propTypes2.default.any.isRequired,
  rowRendererBuilder: _propTypes2.default.func.isRequired,
  headerBuilder: _propTypes2.default.func.isRequired
};

DataBrowser.defaultProps = {
  Grid: DataGrid,
  rowRendererBuilder: buildRowRenderer,
  headerBuilder: buildHeaders,
  paginationBuilder: buildPagination
};

var _default = DataBrowser;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(buildPagination, 'buildPagination', 'src/resources/DataBrowser.jsx');

  __REACT_HOT_LOADER__.register(DataGrid, 'DataGrid', 'src/resources/DataBrowser.jsx');

  __REACT_HOT_LOADER__.register(buildRowRenderer, 'buildRowRenderer', 'src/resources/DataBrowser.jsx');

  __REACT_HOT_LOADER__.register(buildHeaders, 'buildHeaders', 'src/resources/DataBrowser.jsx');

  __REACT_HOT_LOADER__.register(DataBrowser, 'DataBrowser', 'src/resources/DataBrowser.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/resources/DataBrowser.jsx');
}();

;