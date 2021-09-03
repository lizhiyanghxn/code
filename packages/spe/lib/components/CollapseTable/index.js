"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/collapse/style");

var _collapse = _interopRequireDefault(require("antd/es/collapse"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../../utils");

require("./index.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var nope = function nope() {};

var nopeNode = function nopeNode() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};

var CollapseTable = function CollapseTable(props) {
  var _props$onChangeCollap = props.onChangeCollapse,
      onChangeCollapse = _props$onChangeCollap === void 0 ? nope : _props$onChangeCollap,
      _props$subPageApi = props.subPageApi,
      subPageApi = _props$subPageApi === void 0 ? nope : _props$subPageApi,
      _props$subPageParams = props.subPageParams,
      subPageParams = _props$subPageParams === void 0 ? function () {
    return [];
  } : _props$subPageParams,
      _props$subPageSize = props.subPageSize,
      subPageSize = _props$subPageSize === void 0 ? 5 : _props$subPageSize,
      _props$updateTable = props.updateTable,
      updateTable = _props$updateTable === void 0 ? nope : _props$updateTable,
      _props$giveFarDataSou = props.giveFarDataSource,
      giveFarDataSource = _props$giveFarDataSou === void 0 ? nope : _props$giveFarDataSou,
      _props$dataSource = props.dataSource,
      dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
      _props$rightExtra = props.rightExtra,
      rightExtra = _props$rightExtra === void 0 ? nopeNode : _props$rightExtra,
      _props$columns = props.columns,
      columns = _props$columns === void 0 ? [] : _props$columns,
      _props$collapseHeader = props.collapseHeader,
      collapseHeader = _props$collapseHeader === void 0 ? nopeNode : _props$collapseHeader,
      _props$rowSelection = props.rowSelection,
      rowSelection = _props$rowSelection === void 0 ? null : _props$rowSelection,
      _props$expandIconPosi = props.expandIconPosition,
      expandIconPosition = _props$expandIconPosi === void 0 ? 'left' : _props$expandIconPosi,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$flag = props.flag,
      flag = _props$flag === void 0 ? false : _props$flag,
      _props$tableDataSourc = props.tableDataSource,
      tableDataSource = _props$tableDataSourc === void 0 ? [] : _props$tableDataSourc,
      _props$panelClick = props.panelClick,
      panelClick = _props$panelClick === void 0 ? nope : _props$panelClick,
      _props$collapseLeftTi = props.collapseLeftTitleClassName,
      collapseLeftTitleClassName = _props$collapseLeftTi === void 0 ? '' : _props$collapseLeftTi,
      _props$pagination = props.pagination,
      pagination = _props$pagination === void 0 ? {} : _props$pagination,
      _props$rowKey = props.rowKey,
      rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
      _props$tableParameter = props.tableParameter,
      tableParameter = _props$tableParameter === void 0 ? {} : _props$tableParameter;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      subPaging = _useState2[0],
      setSubPaging = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      subList = _useState4[0],
      setSubList = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      activeKey = _useState6[0],
      setActiveKey = _useState6[1]; // 这里获取的是dataSource的下标


  var _onChange = function onChange(index) {
    onChangeCollapse(index);
    setActiveKey([index]);

    if ((0, _utils.notEmpty)(index) && subList[index].length === 0) {
      callApi(dataSource[index], index, 1);
    } // 每次展开时都给父组件传递值（第一次展开，通过callApi给父组件传递data），为了table选择框


    if ((0, _utils.notEmpty)(index) && subList[index].length !== 0) {
      var _subPaging$index;

      giveFarDataSource(subList[index], (_subPaging$index = subPaging[index]) === null || _subPaging$index === void 0 ? void 0 : _subPaging$index.total);
    }
  };

  var subTableOnChange = function subTableOnChange(item, index, current) {
    callApi(item, index, current);
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
              _context.next = 3;
              return subPageApi.apply(void 0, _toConsumableArray(subPageParams(item, subPaging[index])).concat([{
                page_size: subPageSize,
                page: current
              }, item]));

            case 3:
              res = _context.sent;

              if (res && res.list) {
                subPagingNew = _toConsumableArray(subPaging);
                subListNew = _toConsumableArray(subList);
                subPagingNew[index] = {
                  total: res.total,
                  current: current
                };
                updateTable && updateTable(dataSource, index, current, res.list, setActiveKey);
                subListNew[index] = res.list;
                giveFarDataSource(res.list, res.total); // 第一展开传递值

                setSubPaging(subPagingNew);
                setSubList(subListNew);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function callApi(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }(); // 折叠面板的header


  var header = function header(item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "collapseHeader",
      onClick: function onClick() {
        panelClick(item);
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "collapseLeftTitle ".concat(collapseLeftTitleClassName)
    }, collapseHeader(item)), /*#__PURE__*/_react.default.createElement("div", {
      className: "rightExta"
    }, rightExtra(item)));
  };

  (0, _react.useEffect)(function () {
    var index = activeKey[0];

    if (activeKey && (0, _utils.notEmpty)(index)) {
      callApi(dataSource[index], index, 1); // 每次展开时都给父组件传递值（第一次展开，通过callApi给父组件传递data），为了table选择框

      if (subList[index].length !== 0) {
        var _subPaging$index2;

        giveFarDataSource(subList[index], (_subPaging$index2 = subPaging[index]) === null || _subPaging$index2 === void 0 ? void 0 : _subPaging$index2.total);
      }
    } else {
      setActiveKey([]);

      if (dataSource.length > 0) {
        var len = dataSource.length;
        setSubPaging(new Array(len).fill({
          total: 0,
          current: 1
        }));
        setSubList(new Array(len).fill([]));
      }
    }
  }, [dataSource]);
  var collapseParams = {};

  if (flag) {
    collapseParams = {
      onChange: function onChange(index) {
        return _onChange(index);
      },
      activeKey: activeKey
    };
  }

  var handleTableDataSource = function handleTableDataSource(index) {
    if (flag) {
      return subList[index];
    }

    return tableDataSource;
  };

  var tablePagination = function tablePagination(index) {
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, dataSource.length > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "collapse-table-comp ".concat(className)
  }, /*#__PURE__*/_react.default.createElement(_collapse.default, _extends({
    bordered: false,
    accordion: true // 手风琴模式
    ,
    className: (0, _classnames.default)({
      'site-collapse-custom-collapse': !rowSelection
    }, 'custom-collapse-table')
  }, collapseParams, {
    expandIconPosition: expandIconPosition
  }), dataSource.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Panel, {
      header: header(item) // 折叠面板的自定义头部div
      ,
      key: index,
      className: "site-collapse-custom-panel"
    }, /*#__PURE__*/_react.default.createElement(_table.default, _extends({
      className: "collapse-small-table",
      columns: columns,
      dataSource: handleTableDataSource(index),
      pagination: tablePagination(index),
      rowKey: rowKey
    }, tableParameter)));
  }))) : /*#__PURE__*/_react.default.createElement(_table.default, {
    className: "common-table-custom",
    columns: columns,
    dataSource: [],
    pagination: false,
    rowKey: "id"
  }));
};

var _default = CollapseTable;
exports.default = _default;