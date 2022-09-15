"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

var _react = _interopRequireWildcard(require("react"));

var _ahooks = require("ahooks");

var _utils = require("../../utils");

var _useInheritGetPopupContainer = _interopRequireDefault(require("../../utils/useInheritGetPopupContainer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/** Visible是对tabs场景下，被隐藏的table再突然显示时，表格高度初始化失败的情况 visible 表格是否被显示，隐藏状态下设置数据为空数组，这样显示时才会刷新高度 */
var ResizeTable = function ResizeTable(props) {
  var _props$usage = props.usage,
      usage = _props$usage === void 0 ? 'page' : _props$usage,
      _props$columns = props.columns,
      columns = _props$columns === void 0 ? [] : _props$columns,
      children = props.children,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      _props$dataSource = props.dataSource,
      dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
      _props$scrollWidth = props.scrollWidth,
      scrollWidth = _props$scrollWidth === void 0 ? 1216 : _props$scrollWidth,
      rest = _objectWithoutProperties(props, ["usage", "columns", "children", "visible", "dataSource", "scrollWidth"]);

  var tableRef = (0, _react.useRef)(null);
  var inheritGetPopupContainer = (0, _useInheritGetPopupContainer.default)();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1]; // 表格的高度是否为0, 防止切换时闪一下


  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      tableHeight = _useState4[0],
      setTableHeight = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      shouldUpdateFlag = _useState6[0],
      setUpdateFlag = _useState6[1];

  var containerResizeObserver = null;

  var _ref = tableRef || {},
      $parentContainer = _ref.current;

  var _useThrottleFn = (0, _ahooks.useThrottleFn)(function () {
    setUpdateFlag(shouldUpdateFlag + 1);
  }, {
    wait: 300
  }),
      resizeTable = _useThrottleFn.run;

  (0, _react.useMemo)(function () {
    if (!visible && tableHeight) {
      setData([]);
    } else {
      setTimeout(function () {
        return setData(dataSource);
      }, 50);
    }
  }, [visible, dataSource, tableHeight]);
  (0, _react.useEffect)(function () {
    if ($parentContainer) {
      // @ts-ignore
      containerResizeObserver = new ResizeObserver(resizeTable);
      containerResizeObserver.observe($parentContainer);
    }

    return function () {
      if ($parentContainer && containerResizeObserver) {
        containerResizeObserver.unobserve($parentContainer);
      }
    };
  }, [$parentContainer, visible]);
  var scroll = (0, _react.useMemo)(function () {
    if ($parentContainer) {
      var _$parentContainer$get2;

      var _$parentContainer$get = $parentContainer.getBoundingClientRect(),
          width = _$parentContainer$get.width,
          height = _$parentContainer$get.height;

      var tableTheadHeight = ((_$parentContainer$get2 = $parentContainer.getElementsByClassName('ant-table-thead')[0]) === null || _$parentContainer$get2 === void 0 ? void 0 : _$parentContainer$get2.offsetHeight) || 0;
      setTableHeight(height === 0);

      var getTabelWidth = function getTabelWidth() {
        // 页容器中 x 轴 1216 算法为 1440 - 200(菜单) - 24(边距)
        if (usage === 'page') {
          return scrollWidth;
        }

        if (usage === 'modal') {
          return width - 32;
        }

        return width;
      };

      return {
        x: getTabelWidth(),
        y: height - tableTheadHeight
      };
    }

    return {};
  }, [$parentContainer, shouldUpdateFlag]);
  var tableProps = (0, _react.useMemo)(function () {
    return _objectSpread(_objectSpread({}, rest), {}, {
      dataSource: data
    });
  }, [data, rest]);

  if ((0, _utils.notEmpty)(scroll)) {
    tableProps.scroll = scroll;
  }

  var getTable = function getTable() {
    if (columns.length > 0) {
      tableProps.columns = columns.map(function (column, i) {
        if (i === 0) {
          return _objectSpread(_objectSpread({}, column), {}, {
            fixed: 'left'
          });
        }

        if (i === columns.length - 1) {
          return _objectSpread(_objectSpread({}, column), {}, {
            fixed: 'right'
          });
        }

        return column;
      });
      return /*#__PURE__*/_react.default.createElement(_table.default, tableProps);
    }

    if (children) {
      return /*#__PURE__*/_react.default.createElement(_table.default, tableProps, _react.default.Children.map(children, function (column, i) {
        if (i === 0) {
          return /*#__PURE__*/_react.default.cloneElement(column, {
            fixed: 'left'
          });
        }

        if (i === children.length - 1) {
          return /*#__PURE__*/_react.default.cloneElement(column, {
            fixed: 'right'
          });
        }

        return /*#__PURE__*/_react.default.cloneElement(column);
      }));
    }

    return null;
  };

  return /*#__PURE__*/_react.default.createElement(_configProvider.default, {
    getPopupContainer: function getPopupContainer(node) {
      return (// 保证有一定的空间展示popup
        dataSource.length > 5 && node && node.closest('.ant-table-body') || inheritGetPopupContainer(node)
      );
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "resize-table-comp",
    ref: tableRef,
    style: {
      width: '100%',
      height: '100%'
    }
  }, getTable()));
};

var _default = ResizeTable;
exports.default = _default;