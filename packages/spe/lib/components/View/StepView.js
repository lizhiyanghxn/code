"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireDefault(require("react"));

var _Steps = _interopRequireDefault(require("../Steps"));

var _BasicView = _interopRequireDefault(require("./BasicView"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StepView = function StepView(props) {
  var _props$currentStep = props.currentStep,
      currentStep = _props$currentStep === void 0 ? 1 : _props$currentStep,
      _props$stepsConfig = props.stepsConfig,
      stepsConfig = _props$stepsConfig === void 0 ? [] : _props$stepsConfig,
      scrollRef = props.scrollRef,
      children = props.children,
      rest = _objectWithoutProperties(props, ["currentStep", "stepsConfig", "scrollRef", "children"]);

  return /*#__PURE__*/_react.default.createElement(_BasicView.default, _extends({}, rest, {
    className: (0, _classnames.default)([rest.className, 'step-view'])
  }), stepsConfig.length > 0 ? /*#__PURE__*/_react.default.createElement(_Steps.default, {
    currentStep: currentStep,
    stepsConfig: stepsConfig,
    usage: "page"
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement(_configProvider.default, {
    getPopupContainer: function getPopupContainer(node) {
      return node.closest('.stepview-scorll-container') || document.body;
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "stepview-scorll-container",
    ref: scrollRef
  }, children)));
};

var _default = StepView;
exports.default = _default;