"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CommonTip = function CommonTip(props) {
  var _props$text = props.text,
      text = _props$text === void 0 ? '' : _props$text,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'top' : _props$placement,
      _props$type = props.type,
      type = _props$type === void 0 ? '1' : _props$type,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 14 : _props$fontSize,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      children = props.children;
  return /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    placement: placement,
    title: text,
    color: "rgb(255,255,255)",
    overlayClassName: "custom-tooltip"
  }, children || /*#__PURE__*/_react.default.createElement("i", {
    className: (0, _classnames.default)('common-tip', 'iconfont', {
      iconwenhao: type === '1',
      iconi: type === '2',
      iconmore_information: type === '3'
    }),
    style: _objectSpread({
      fontSize: fontSize
    }, style)
  }));
};

var _default = CommonTip;
exports.default = _default;