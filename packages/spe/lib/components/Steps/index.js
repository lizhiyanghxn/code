"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Steps = function Steps(props) {
  var _props$usage = props.usage,
      usage = _props$usage === void 0 ? 'modal' : _props$usage,
      _props$stepsConfig = props.stepsConfig,
      stepsConfig = _props$stepsConfig === void 0 ? [] : _props$stepsConfig,
      _props$currentStep = props.currentStep,
      currentStep = _props$currentStep === void 0 ? 1 : _props$currentStep,
      _props$isCenter = props.isCenter,
      isCenter = _props$isCenter === void 0 ? false : _props$isCenter;

  var stepInPage = function stepInPage() {
    return usage === 'page';
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('model-steps', {
      'is-page': stepInPage()
    })
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: (0, _classnames.default)({
      'flex-center': isCenter
    })
  }, stepsConfig.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: (0, _classnames.default)({
        'completed-step': currentStep > index + 1
      }, {
        'current-step': currentStep === index + 1
      })
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "ms-serial-number"
    }, index + 1), /*#__PURE__*/_react.default.createElement("span", {
      className: "ms-name"
    }, item));
  })));
};

var _default = Steps;
exports.default = _default;