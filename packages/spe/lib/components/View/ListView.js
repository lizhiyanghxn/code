"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/pagination/style");

var _pagination = _interopRequireDefault(require("antd/es/pagination"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BasicView = _interopRequireDefault(require("./BasicView"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ListView = function ListView(props) {
  var headExtra = props.headExtra,
      searchArea = props.searchArea,
      pagingConfig = props.pagingConfig,
      children = props.children,
      _props$fixPagination = props.fixPagination,
      fixPagination = _props$fixPagination === void 0 ? true : _props$fixPagination,
      rest = _objectWithoutProperties(props, ["headExtra", "searchArea", "pagingConfig", "children", "fixPagination"]);

  var bodySectionRef = (0, _react.useRef)(null);

  var getHeadExtraArea = function getHeadExtraArea() {
    if (headExtra) {
      return headExtra;
    }

    return null;
  };

  var getSearchArea = function getSearchArea() {
    if (searchArea) {
      return searchArea;
    }

    return null;
  };

  var getBodySection = function getBodySection() {
    var childrenWithRef = _react.default.Children.map(children, function (item) {
      return /*#__PURE__*/_react.default.cloneElement(item, {
        furef: bodySectionRef
      });
    });

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "body-section-list"
    }, childrenWithRef);
  };

  var getFooter = function getFooter() {
    return /*#__PURE__*/_react.default.createElement("footer", {
      className: (0, _classnames.default)({
        'view-footer': true,
        'no-footer': !pagingConfig
      })
    }, (pagingConfig === null || pagingConfig === void 0 ? void 0 : pagingConfig.total) && /*#__PURE__*/_react.default.createElement(_pagination.default, _extends({
      className: "page-custom",
      showSizeChanger: true,
      showQuickJumper: true
    }, pagingConfig)));
  };

  var getMainBody = function getMainBody() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, getHeadExtraArea(), getSearchArea(), /*#__PURE__*/_react.default.createElement("div", {
      className: "scroll-container"
    }, /*#__PURE__*/_react.default.createElement("section", {
      className: (0, _classnames.default)({
        'body-section': true,
        'scroll-in-table': fixPagination
      }),
      ref: bodySectionRef
    }, getBodySection()), !fixPagination && getFooter()), fixPagination && getFooter());
  };

  return /*#__PURE__*/_react.default.createElement(_BasicView.default, _extends({}, rest, {
    className: (0, _classnames.default)([rest.className, 'list-view'])
  }), getMainBody());
};

var _default = ListView;
exports.default = _default;