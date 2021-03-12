"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/list/style");

var _list = _interopRequireDefault(require("antd/es/list"));

var _react = _interopRequireDefault(require("react"));

var _get = _interopRequireDefault(require("rc-util/es/utils/get"));

var _useLazyKVMap3 = _interopRequireDefault(require("antd/es/table/hooks/useLazyKVMap"));

var _useSelection3 = _interopRequireDefault(require("antd/es/table/hooks/useSelection"));

var _usePagination3 = _interopRequireDefault(require("antd/es/table/hooks/usePagination"));

var _Item = _interopRequireDefault(require("./Item"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ListView(props) {
  var dataSource = props.dataSource,
      columns = props.columns,
      rowKey = props.rowKey,
      showActions = props.showActions,
      prefixCls = props.prefixCls,
      actionRef = props.actionRef,
      _renderItem = props.renderItem,
      expandableConfig = props.expandable,
      rowSelection = props.rowSelection,
      pagination = props.pagination,
      rest = _objectWithoutProperties(props, ["dataSource", "columns", "rowKey", "showActions", "prefixCls", "actionRef", "renderItem", "expandable", "rowSelection", "pagination"]);

  var getRowKey = _react.default.useMemo(function () {
    if (typeof rowKey === 'function' && rowKey) {
      return rowKey;
    }

    return function (record, index) {
      return record[rowKey] || index;
    };
  }, [rowKey]);

  var _useLazyKVMap = (0, _useLazyKVMap3.default)(dataSource, 'children', getRowKey),
      _useLazyKVMap2 = _slicedToArray(_useLazyKVMap, 1),
      getRecordByKey = _useLazyKVMap2[0]; // 合并分页的的配置


  var _usePagination = (0, _usePagination3.default)(dataSource.length, _objectSpread({
    responsive: true
  }, pagination), function () {}),
      _usePagination2 = _slicedToArray(_usePagination, 1),
      mergedPagination = _usePagination2[0];
  /** 根据分页来回去不同的数据，模拟 table */


  var pageData = _react.default.useMemo(function () {
    if (pagination === false || !mergedPagination.pageSize || dataSource.length < mergedPagination.total) {
      return dataSource;
    }

    var _mergedPagination$cur = mergedPagination.current,
        current = _mergedPagination$cur === void 0 ? 1 : _mergedPagination$cur,
        _mergedPagination$pag = mergedPagination.pageSize,
        pageSize = _mergedPagination$pag === void 0 ? 10 : _mergedPagination$pag;
    var currentPageData = dataSource.slice((current - 1) * pageSize, current * pageSize);
    return currentPageData;
  }, [!!pagination, dataSource, mergedPagination && mergedPagination.current, mergedPagination && mergedPagination.pageSize, mergedPagination && mergedPagination.total]);
  /** 提供和 table 一样的 rowSelection 配置 */


  var _useSelection = (0, _useSelection3.default)(rowSelection, {
    getRowKey: getRowKey,
    getRecordByKey: getRecordByKey,
    prefixCls: prefixCls,
    data: dataSource,
    pageData: pageData,
    expandType: 'row',
    childrenColumnName: 'children',
    locale: {},
    expandIconColumnIndex: 0
  }),
      _useSelection2 = _slicedToArray(_useSelection, 2),
      selectItemRender = _useSelection2[0],
      selectedKeySet = _useSelection2[1]; // 提供和 Table 一样的 expand 支持


  var _ref = expandableConfig || {},
      expandedRowKeys = _ref.expandedRowKeys,
      defaultExpandedRowKeys = _ref.defaultExpandedRowKeys,
      _ref$defaultExpandAll = _ref.defaultExpandAllRows,
      defaultExpandAllRows = _ref$defaultExpandAll === void 0 ? true : _ref$defaultExpandAll,
      onExpand = _ref.onExpand,
      onExpandedRowsChange = _ref.onExpandedRowsChange,
      rowExpandable = _ref.rowExpandable;

  var _React$useState = _react.default.useState(function () {
    if (defaultExpandedRowKeys) {
      return defaultExpandedRowKeys;
    }

    if (defaultExpandAllRows !== false) {
      return dataSource.map(getRowKey);
    }

    return [];
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      innerExpandedKeys = _React$useState2[0],
      setInnerExpandedKeys = _React$useState2[1];

  var mergedExpandedKeys = _react.default.useMemo(function () {
    return new Set(expandedRowKeys || innerExpandedKeys || []);
  }, [expandedRowKeys, innerExpandedKeys]);

  var onTriggerExpand = _react.default.useCallback(function (record) {
    var key = getRowKey(record, dataSource.indexOf(record));
    var newExpandedKeys;
    var hasKey = mergedExpandedKeys.has(key);

    if (hasKey) {
      mergedExpandedKeys.delete(key);
      newExpandedKeys = _toConsumableArray(mergedExpandedKeys);
    } else {
      newExpandedKeys = [].concat(_toConsumableArray(mergedExpandedKeys), [key]);
    }

    setInnerExpandedKeys(newExpandedKeys);

    if (onExpand) {
      onExpand(!hasKey, record);
    }

    if (onExpandedRowsChange) {
      onExpandedRowsChange(newExpandedKeys);
    }
  }, [getRowKey, mergedExpandedKeys, dataSource, onExpand, onExpandedRowsChange]);
  /** 这个是 选择框的 render 方法 为了兼容 antd 的 table,用了同样的渲染逻辑 所以看起来有点奇怪 */


  var selectItemDom = selectItemRender([])[0];
  return /*#__PURE__*/_react.default.createElement(_list.default, _extends({}, rest, {
    dataSource: pageData,
    pagination: pagination && mergedPagination,
    renderItem: function renderItem(item, index) {
      var _actionRef$current;

      if (_renderItem) {
        return _renderItem(item, index);
      }

      var listItemProps = {};
      columns === null || columns === void 0 ? void 0 : columns.forEach(function (column) {
        _constants.PRO_LIST_KEYS.forEach(function (key) {
          if (column.key === key) {
            var dataIndex = column.dataIndex || key;
            var rawData = Array.isArray(dataIndex) ? (0, _get.default)(item, dataIndex) : item[dataIndex];
            listItemProps[key] = column.render ? column.render(rawData, item, index) : rawData;
          }
        });
      });
      var checkboxDom;

      if (selectItemDom && selectItemDom.render) {
        checkboxDom = selectItemDom.render(item, item, index);
      }

      var _ref2 = ((_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 ? void 0 : _actionRef$current.isEditable(_objectSpread(_objectSpread({}, item), {}, {
        index: index
      }))) || {},
          isEditable = _ref2.isEditable,
          recordKey = _ref2.recordKey;

      return /*#__PURE__*/_react.default.createElement(_Item.default, _extends({
        key: recordKey,
        cardProps: rest.grid
      }, listItemProps, {
        recordKey: recordKey,
        isEditable: isEditable || false,
        expandable: expandableConfig,
        expand: mergedExpandedKeys.has(getRowKey(item, index)),
        onExpand: function onExpand() {
          onTriggerExpand(item);
        },
        record: item,
        showActions: showActions,
        rowSupportExpand: !rowExpandable || rowExpandable && rowExpandable(item),
        selected: selectedKeySet.has(getRowKey(item, index)),
        checkbox: checkboxDom
      }));
    }
  }));
}

var _default = ListView;
exports.default = _default;