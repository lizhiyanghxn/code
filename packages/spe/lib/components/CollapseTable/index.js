"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/collapse/style");

var _collapse = _interopRequireDefault(require("antd/es/collapse"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Panel = _collapse.default.Panel;
var oldlist = '';

var CollapseTable = function CollapseTable(props) {
  var _props$onChangeCollap = props.onChangeCollapse,
      onChangeCollapse = _props$onChangeCollap === void 0 ? function () {} : _props$onChangeCollap,
      _props$onCollapseOpen = props.onCollapseOpen,
      onCollapseOpen = _props$onCollapseOpen === void 0 ? function () {} : _props$onCollapseOpen,
      _props$subPageApi = props.subPageApi,
      subPageApi = _props$subPageApi === void 0 ? function () {} : _props$subPageApi,
      _props$subPageParams = props.subPageParams,
      subPageParams = _props$subPageParams === void 0 ? function () {
    return [];
  } : _props$subPageParams,
      _props$subPageSize = props.subPageSize,
      subPageSize = _props$subPageSize === void 0 ? 5 : _props$subPageSize,
      _props$updateTable = props.updateTable,
      updateTable = _props$updateTable === void 0 ? function () {} : _props$updateTable,
      _props$giveFarDataSou = props.giveFarDataSource,
      giveFarDataSource = _props$giveFarDataSou === void 0 ? function () {} : _props$giveFarDataSou,
      _props$modelList = props.modelList,
      modelList = _props$modelList === void 0 ? [] : _props$modelList,
      _props$rightExtra = props.rightExtra,
      rightExtra = _props$rightExtra === void 0 ? function () {
    return '';
  } : _props$rightExtra,
      columns = props.columns,
      collapseHeader = props.collapseHeader,
      rowSelection = props.rowSelection,
      _props$expandIconPosi = props.expandIconPosition,
      expandIconPosition = _props$expandIconPosi === void 0 ? 'left' : _props$expandIconPosi,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$flag = props.flag,
      flag = _props$flag === void 0 ? false : _props$flag,
      _props$dataSource = props.dataSource,
      dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
      _props$panelClick = props.panelClick,
      panelClick = _props$panelClick === void 0 ? function () {} : _props$panelClick,
      _props$collapseLeftTi = props.collapseLeftTitleClassName,
      collapseLeftTitleClassName = _props$collapseLeftTi === void 0 ? '' : _props$collapseLeftTi,
      _props$pagination = props.pagination,
      pagination = _props$pagination === void 0 ? {} : _props$pagination,
      _props$rowKey = props.rowKey,
      rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
      _props$showArrow = props.showArrow,
      showArrow = _props$showArrow === void 0 ? true : _props$showArrow,
      _props$doNotReset = props.doNotReset,
      doNotReset = _props$doNotReset === void 0 ? false : _props$doNotReset;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      activeKey = _useState2[0],
      setActiveKey = _useState2[1]; // 如果展开不需要请求或者使用onclick参数，则不需要关注以下组件内部的逻辑


  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      subPaging = _useState4[0],
      setSubPaging = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      subList = _useState6[0],
      setSubList = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      subLoading = _useState8[0],
      setSubLoading = _useState8[1];

  var collapseParams = {};

  var collapseChange = function collapseChange(index) {
    if (index) {
      setActiveKey([Number(index)]);
      onCollapseOpen(Number(index));
    } else {
      setActiveKey([]);
    }
  };

  var collapseClick = function collapseClick(item) {
    panelClick(item);
  };
  /**
   * 子 List 数据请求
   *
   * @param {any} item 父级行对象
   * @param {any} index 当前操作行的下标
   * @param {any} current 当前页码
   */


  var callApi = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item, index, current) {
      var res, subPagingNew, subListNew;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setSubLoading(true);
              _context.next = 4;
              return subPageApi.apply(void 0, _toConsumableArray(subPageParams(item, subPaging[index])).concat([{
                page_size: subPageSize,
                page: current
              }, item]));

            case 4:
              res = _context.sent;

              if (res && res.list) {
                subPagingNew = _toConsumableArray(subPaging);
                subListNew = _toConsumableArray(subList);
                subPagingNew[index] = {
                  total: res.total,
                  current: current
                };
                updateTable(modelList, index, current, res.list, setActiveKey);
                subListNew[index] = res.list.map(function (iitem) {
                  return _objectSpread(_objectSpread({}, iitem), {}, {
                    rowTotal: res.total
                  });
                });
                giveFarDataSource(res.list, res.total); // 第一展开传递值

                setSubPaging(subPagingNew);
                setSubList(subListNew);
              }

              setSubLoading(false);
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              setSubLoading(false);
              console.log(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function callApi(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }(); // 这里获取的是modelList的下标


  var _onChange = function onChange(index) {
    onChangeCollapse(index);
    setActiveKey([index]);

    if ((0, _utils.notEmpty)(index) && subList[index].length === 0) {
      callApi(modelList[index], index, 1);
    } // 每次展开时都给父组件传递值（第一次展开，通过callApi给父组件传递data），为了table选择框


    if ((0, _utils.notEmpty)(index) && subList[index].length !== 0) {
      var _subPaging$index;

      giveFarDataSource(subList[index], (_subPaging$index = subPaging[index]) === null || _subPaging$index === void 0 ? void 0 : _subPaging$index.total);
    }
  };

  if (!flag) {
    collapseParams = {
      onChange: function onChange(index) {
        return collapseChange(index);
      }
    };
  }

  if (flag) {
    collapseParams = {
      onChange: function onChange(index) {
        return _onChange(index);
      }
    };
  }

  (0, _react.useEffect)(function () {
    if (!doNotReset) {
      setActiveKey([]);
    }

    if (flag) {
      oldlist = JSON.stringify(modelList);
    }
  }, [modelList]);

  var subTableOnChange = function subTableOnChange(item, index, current) {
    callApi(item, index, current);
  }; // 折叠面板的header


  var header = function header(item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "collapseHeader",
      onClick: function onClick() {
        return collapseClick(item);
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "collapseLeftTitle ".concat(collapseLeftTitleClassName)
    }, collapseHeader(item, index)), /*#__PURE__*/_react.default.createElement("div", {
      className: "rightExta"
    }, rightExtra(item)));
  };

  (0, _react.useEffect)(function () {
    var index = activeKey[0];

    if (flag) {
      if (activeKey && (0, _utils.notEmpty)(index) && oldlist !== JSON.stringify(modelList)) {
        callApi(modelList[index], index, 1); // 每次展开时都给父组件传递值（第一次展开，通过callApi给父组件传递data），为了table选择框

        if (subList[index].length !== 0) {
          var _subPaging$index2;

          giveFarDataSource(subList[index], (_subPaging$index2 = subPaging[index]) === null || _subPaging$index2 === void 0 ? void 0 : _subPaging$index2.total);
        }
      } else {
        setActiveKey([]);

        if (modelList.length > 0) {
          var len = modelList.length;
          setSubPaging(new Array(len).fill({
            total: 0,
            current: 1
          }));
          setSubList(new Array(len).fill([]));
        }
      }
    }
  }, [modelList]);

  var tableDataSource = function tableDataSource(index) {
    if (flag) {
      return subList[index];
    }

    return dataSource;
  };

  var tablePagination = function tablePagination(index, item) {
    if (flag) {
      var _subPaging$index3, _subPaging$index4;

      return {
        size: 'small',
        pageSize: subPageSize,
        onChange: function onChange(num) {
          return subTableOnChange(item, index, num);
        },
        total: ((_subPaging$index3 = subPaging[index]) === null || _subPaging$index3 === void 0 ? void 0 : _subPaging$index3.total) || 0,
        current: ((_subPaging$index4 = subPaging[index]) === null || _subPaging$index4 === void 0 ? void 0 : _subPaging$index4.current) || 0,
        showSizeChanger: false
      };
    }

    return pagination;
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, modelList.length > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "collapse-table-comp ".concat(className)
  }, /*#__PURE__*/_react.default.createElement(_collapse.default, _extends({
    bordered: false,
    accordion: true // 手风琴模式
    ,
    className: (0, _classnames.default)({
      'site-collapse-custom-collapse': !rowSelection
    }, 'custom-collapse-table')
  }, collapseParams, {
    expandIconPosition: expandIconPosition,
    activeKey: activeKey
  }), modelList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Panel, {
      header: header(item, index) // 折叠面板的自定义头部div
      ,
      key: index,
      className: "site-collapse-custom-panel",
      showArrow: showArrow
    }, item.childJSX ? item.childJSX(item, index) : /*#__PURE__*/_react.default.createElement(_spin.default, {
      spinning: subLoading
    }, /*#__PURE__*/_react.default.createElement(_table.default, {
      className: "collapse-small-table",
      columns: columns,
      rowSelection: rowSelection,
      dataSource: tableDataSource(index),
      pagination: tablePagination(index, item),
      rowKey: rowKey,
      scroll: {
        x: 1216
      }
    })));
  }))) : /*#__PURE__*/_react.default.createElement(_table.default, {
    className: "common-table-custom common-table-custom-null",
    columns: columns,
    showHeader: false,
    dataSource: [],
    pagination: false,
    rowKey: "id"
  }));
};

var _default = CollapseTable;
exports.default = _default;