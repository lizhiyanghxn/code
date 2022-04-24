"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 获取组件上层最近的antd的ConfigProvider的getPopupContainer方法 */
function useInheritGetPopupContainer() {
  var antdConfigContext = (0, _react.useContext)(_configProvider.default.ConfigContext);

  var inheritGetPopupContainer = antdConfigContext.getPopupContainer || function () {
    return document.body;
  };

  return inheritGetPopupContainer;
}

var _default = useInheritGetPopupContainer;
exports.default = _default;