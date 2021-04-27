"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeightMotion;

var _react = _interopRequireDefault(require("react"));

var _rcMotion = _interopRequireDefault(require("rc-motion"));

require("./HeightMotion.less");

var _config = require("./utils/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function HeightMotion(props) {
  var _props$visible = props.visible,
      visible = _props$visible === void 0 ? false : _props$visible,
      children = props.children,
      _props$motionConfig = props.motionConfig,
      motionConfig = _props$motionConfig === void 0 ? {} : _props$motionConfig;
  var prefixCls = _config.heightMotion.motionName;

  var openMotion = _objectSpread(_objectSpread({}, _config.heightMotion), {}, {
    motionAppear: false,
    leavedClassName: "".concat(prefixCls, "-content-hidden")
  }, motionConfig);

  return /*#__PURE__*/_react.default.createElement(_rcMotion.default, _extends({
    visible: visible
  }, openMotion), function (_ref, ref) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: ref,
      className: motionClassName,
      style: motionStyle
    }, children);
  });
}