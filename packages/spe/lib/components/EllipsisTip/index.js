"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ahooks = require("ahooks");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

/** 默认是子节点设置了ellipsis样式，此时必须保证children为单一节点 设置isParentEllipsis时，表示父节点设置了ellipsis样式（适合Table组件column设置了ellipsis） */
var EllipsisTip = function EllipsisTip(props) {
  var _props$isParentEllips = props.isParentEllipsis,
      isParentEllipsis = _props$isParentEllips === void 0 ? false : _props$isParentEllips,
      placement = props.placement,
      title = props.title,
      children = props.children,
      _props$color = props.color,
      color = _props$color === void 0 ? '#fff' : _props$color,
      rest = _objectWithoutProperties(props, ["isParentEllipsis", "placement", "title", "children", "color"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showTooltip = _useState2[0],
      setShowTooltip = _useState2[1];

  var contentRef = (0, _react.useRef)(null);
  var ellipsisRef = (0, _react.useRef)(null);
  var containerResizeObserver = null;

  var calcShow = function calcShow() {
    if (ellipsisRef.current.offsetWidth < ellipsisRef.current.scrollWidth || ellipsisRef.current.offsetHeight < ellipsisRef.current.scrollHeight) {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  };

  var _useThrottleFn = (0, _ahooks.useThrottleFn)(calcShow, {
    wait: 300
  }),
      resizeTable = _useThrottleFn.run;

  var childElement = (0, _react.useMemo)(function () {
    if (!children) {
      return /*#__PURE__*/_react.default.createElement("span", {
        ref: contentRef
      }, title);
    }

    if (isParentEllipsis) {
      return /*#__PURE__*/_react.default.createElement("span", {
        ref: contentRef
      }, children);
    }

    var child = _react.default.Children.only(children);

    return /*#__PURE__*/_react.default.cloneElement(child, {
      ref: contentRef
    });
  }, [children, title, isParentEllipsis]);
  (0, _react.useEffect)(function () {
    if (contentRef.current) {
      if (isParentEllipsis) {
        ellipsisRef.current = contentRef.current.parentElement;
      } else {
        ellipsisRef.current = contentRef.current;
      }

      calcShow(); // @ts-ignore

      containerResizeObserver = new ResizeObserver(resizeTable);
      containerResizeObserver.observe(ellipsisRef.current);
    }

    return function () {
      containerResizeObserver.unobserve(ellipsisRef.current);
    };
  }, []);
  return showTooltip ? /*#__PURE__*/_react.default.createElement(_tooltip.default, _extends({
    placement: placement,
    title: title,
    color: color,
    overlayClassName: (0, _classnames.default)(['custom-tooltip', rest.overlayClassName])
  }, rest), childElement) : childElement;
};

var _default = EllipsisTip;
exports.default = _default;