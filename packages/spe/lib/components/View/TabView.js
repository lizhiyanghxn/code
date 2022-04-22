"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BasicView = _interopRequireDefault(require("./BasicView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TabPane = _tabs.default.TabPane;

var TabView = function TabView(props) {
  var tabsConfig = props.tabsConfig,
      _props$tabWrapConfig = props.tabWrapConfig,
      tabWrapConfig = _props$tabWrapConfig === void 0 ? {} : _props$tabWrapConfig,
      _props$defaultTabKey = props.defaultTabKey,
      defaultTabKey = _props$defaultTabKey === void 0 ? '' : _props$defaultTabKey,
      className = props.className,
      rest = _objectWithoutProperties(props, ["tabsConfig", "tabWrapConfig", "defaultTabKey", "className"]);

  var wrapperClassNames = (0, _classnames.default)("tab-view", className);
  return /*#__PURE__*/_react.default.createElement(_BasicView.default, _extends({}, rest, {
    className: wrapperClassNames
  }), /*#__PURE__*/_react.default.createElement(_tabs.default, _extends({
    defaultActiveKey: defaultTabKey
  }, tabWrapConfig), Object.entries(tabsConfig).map(function (tabConfig) {
    var _tabConfig = _slicedToArray(tabConfig, 2),
        key = _tabConfig[0],
        tabPane = _tabConfig[1];

    var tab = tabPane.tab,
        children = tabPane.children,
        paneConfig = _objectWithoutProperties(tabPane, ["tab", "children"]);

    return /*#__PURE__*/_react.default.createElement(TabPane, _extends({
      tab: tab,
      key: key
    }, paneConfig), /*#__PURE__*/_react.default.createElement(_configProvider.default, {
      getPopupContainer: function getPopupContainer() {
        return document.querySelector('.scroll-container') || document.querySelector('.content-view') || document.body;
      }
    }, children));
  })));
};

var _default = TabView;
exports.default = _default;