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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var isFunctionEmpty = function isFunctionEmpty(func) {
  if (typeof func !== 'function') {
    return true;
  }

  var matchItems = func.toString().replace(/\s+/g, '').match(/{.*}/g) || []; // () => history.replace('/modelList') 为 false
  // () => () 为 false

  if (matchItems.length === 0) {
    return false;
  }

  return matchItems[0] === '{}';
};

var Breadcrumb = function Breadcrumb(props) {
  var _props$routersList = props.routersList,
      routersList = _props$routersList === void 0 ? [] : _props$routersList,
      rest = _objectWithoutProperties(props, ["routersList"]);

  var arrow = /*#__PURE__*/_react.default.createElement("i", {
    className: "iconfont iconfangxiangyou"
  });

  var getList = (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "b-title-item"
    }, routersList.map(function (item, i) {
      var title = item.title,
          click = item.click;
      var notEndIndex = i < routersList.length - 1;
      var routerProps = {};
      var routerClickAble = !isFunctionEmpty(click);

      if (routerClickAble) {
        routerProps.onClick = click;
      }

      return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: i
      }, /*#__PURE__*/_react.default.createElement("span", _extends({
        className: (0, _classnames.default)('b-title-item', {
          'hover-cursor': notEndIndex && routerClickAble
        })
      }, routerProps), title), notEndIndex && arrow);
    }));
  }, [routersList]);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "breadcrumb-list-comp"
  }, rest), getList);
};

var _default = Breadcrumb;
exports.default = _default;