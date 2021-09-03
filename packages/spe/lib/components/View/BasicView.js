"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/pagination/style");

var _pagination = _interopRequireDefault(require("antd/es/pagination"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

require("./BasicView.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * 功能：基础 layout view，衍生出详情页，列表页，手风琴列表页，tabs子页面，Step 步骤页
 */
var BasicView = function BasicView(props) {
  var routersList = props.routersList,
      viewType = props.viewType,
      toolEle = props.toolEle,
      pagingConfig = props.pagingConfig,
      children = props.children,
      headerRightEle = props.headerRightEle,
      bodyNoScroll = props.bodyNoScroll,
      rest = _objectWithoutProperties(props, ["routersList", "viewType", "toolEle", "pagingConfig", "children", "headerRightEle", "bodyNoScroll"]);

  var bsRef = (0, _react.useRef)(null);
  var isList = (0, _react.useMemo)(function () {
    return viewType === 'List';
  }, [viewType]);
  var isSubList = (0, _react.useMemo)(function () {
    return viewType === 'IncludeSublist';
  }, [viewType]);
  var isTabList = (0, _react.useMemo)(function () {
    return viewType === 'TabList';
  }, [viewType]);
  /** TabList 的 children 为函数 */

  var getPagination = (pagingConfig === null || pagingConfig === void 0 ? void 0 : pagingConfig.total) && /*#__PURE__*/_react.default.createElement(_pagination.default, _extends({
    className: "page-custom"
  }, pagingConfig));

  var headerHasBottomBorder = isTabList;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "view-comp"
  }, rest), /*#__PURE__*/_react.default.createElement("header", {
    className: (0, _classnames.default)({
      'no-border-bottom': headerHasBottomBorder
    }, 'view-header')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "view-base-title"
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "view-header-left"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, {
    routersList: routersList
  })), /*#__PURE__*/_react.default.createElement("section", {
    className: "view-header-right"
  }, headerRightEle))), /*#__PURE__*/_react.default.createElement("main", {
    className: (0, _classnames.default)('view-main', {
      'view-is-list': isList || isSubList || isTabList,
      'is-sublist': isSubList
    }),
    style: {
      height: "calc(100% - 64px".concat(isTabList ? ' - 40px' : '', ")")
    }
  }, toolEle && /*#__PURE__*/_react.default.createElement("section", {
    className: "tool-section"
  }, toolEle), /*#__PURE__*/_react.default.createElement("section", {
    className: "body-section",
    ref: bsRef
  }, isList || isSubList || isTabList ? /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('body-section-list', {
      'no-scroll': bodyNoScroll
    })
  }, children, isSubList && /*#__PURE__*/_react.default.createElement("div", {
    className: "body-show-paging"
  }, getPagination)) : children), isList || isTabList ? /*#__PURE__*/_react.default.createElement("footer", {
    className: (0, _classnames.default)('view-footer ', {
      'show-paging': isList || isTabList
    })
  }, getPagination) : null));
};

var _default = BasicView;
exports.default = _default;