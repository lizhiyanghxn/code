"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/es/dropdown"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _DropdownFooter = _interopRequireDefault(require("../DropdownFooter"));

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FilterDropdown = function FilterDropdown(props) {
  var children = props.children,
      label = props.label,
      footer = props.footer,
      disabled = props.disabled,
      onVisibleChange = props.onVisibleChange,
      visible = props.visible;

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-core-field-dropdown');
  return /*#__PURE__*/_react.default.createElement(_dropdown.default, {
    disabled: disabled,
    trigger: ['click'],
    visible: visible,
    onVisibleChange: onVisibleChange,
    overlay: /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixCls, "-overlay")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children), footer && /*#__PURE__*/_react.default.createElement(_DropdownFooter.default, _extends({
      disabled: disabled
    }, footer)))
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(prefixCls, "-label")
  }, label));
};

var _default = FilterDropdown;
exports.default = _default;