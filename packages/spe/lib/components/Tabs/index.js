"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tabs = function Tabs(props) {
  var _props$defaultActive = props.defaultActive,
      defaultActive = _props$defaultActive === void 0 ? 1 : _props$defaultActive,
      tabsConfig = props.tabsConfig,
      _props$onTabChange = props.onTabChange,
      onTabChange = _props$onTabChange === void 0 ? function () {} : _props$onTabChange,
      rest = _objectWithoutProperties(props, ["defaultActive", "tabsConfig", "onTabChange"]);

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var tabsRef = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)({
    left: 0,
    width: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      lineStyle = _useState4[0],
      setLineStyle = _useState4[1];

  var setSelect = function setSelect(key) {
    setCurrentIndex(key);
    setTimeout(function () {
      document.getElementsByClassName('common-tabs-li')[key].click();
    }, 50);
  };

  (0, _react.useEffect)(function () {
    if (tabsConfig.length > 0) {
      setSelect(defaultActive - 1);
    }
  }, []);

  var tabClick = function tabClick(e, index) {
    var ctRectObj = tabsRef.current.getBoundingClientRect();
    var liRectObj = e.currentTarget.getBoundingClientRect();
    setLineStyle({
      left: liRectObj.x - ctRectObj.x,
      width: liRectObj.width
    });

    if (currentIndex !== index) {
      setCurrentIndex(index);
    }

    onTabChange(index);
  };

  var getTabs = (0, _react.useMemo)(function () {
    return tabsConfig.map(function (label, index) {
      return /*#__PURE__*/_react.default.createElement("li", {
        className: (0, _classnames.default)('common-tabs-li', {
          active: currentIndex === index
        }),
        key: label,
        onClick: function onClick(e) {
          return tabClick(e, index);
        }
      }, label);
    });
  }, [tabsConfig, currentIndex]);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "common-tabs",
    ref: tabsRef
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "bottom-line",
    style: lineStyle
  }), /*#__PURE__*/_react.default.createElement("ul", {
    className: "common-tabs-ul"
  }, getTabs));
};

var _default = Tabs;
exports.default = _default;