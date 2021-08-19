"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.scss");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Card = function Card(props) {
  var children = props.children,
      className = props.className,
      _props$titleText = props.titleText,
      titleText = _props$titleText === void 0 ? '' : _props$titleText,
      _props$subTitleText = props.subTitleText,
      subTitleText = _props$subTitleText === void 0 ? '' : _props$subTitleText,
      _props$showHead = props.showHead,
      showHead = _props$showHead === void 0 ? true : _props$showHead,
      _props$headClass = props.headClass,
      headClass = _props$headClass === void 0 ? 'head-style-1' : _props$headClass,
      rest = _objectWithoutProperties(props, ["children", "className", "titleText", "subTitleText", "showHead", "headClass"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classnames.default)('content-box-comp', className)
  }, rest), showHead && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('head', headClass)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "head-left"
  }, titleText ? /*#__PURE__*/_react.default.createElement("div", null, titleText, " ", subTitleText && /*#__PURE__*/_react.default.createElement("span", {
    className: "sub-title-text"
  }, subTitleText)) : (0, _utils.getSlotContent)(children, 'headLeft')), /*#__PURE__*/_react.default.createElement("div", {
    className: "head-right"
  }, (0, _utils.getSlotContent)(children, 'headRight'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, (0, _utils.getSlotContent)(children, 'content')));
};

var _default = Card;
exports.default = _default;