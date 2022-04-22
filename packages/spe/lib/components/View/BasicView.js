"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BasicView = function BasicView(props) {
  var _props$noHeader = props.noHeader,
      noHeader = _props$noHeader === void 0 ? false : _props$noHeader,
      routers = props.routers,
      headerRightElement = props.headerRightElement,
      _props$footerActions = props.footerActions,
      footerActions = _props$footerActions === void 0 ? [] : _props$footerActions,
      _props$spinning = props.spinning,
      spinning = _props$spinning === void 0 ? false : _props$spinning,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      children = props.children,
      rest = _objectWithoutProperties(props, ["noHeader", "routers", "headerRightElement", "footerActions", "spinning", "className", "children"]);

  var renderHeader = function renderHeader() {
    return /*#__PURE__*/_react.default.createElement("header", {
      className: "view-header"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "view-base-title"
    }, /*#__PURE__*/_react.default.createElement("section", {
      className: "view-header-left"
    }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, {
      routersList: routers
    })), /*#__PURE__*/_react.default.createElement("section", {
      className: "view-header-right"
    }, headerRightElement)));
  };

  var renderFooterAction = function renderFooterAction() {
    if (footerActions.length > 0) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "footer-actions"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "btn"
      }, footerActions.map(function (item, i) {
        return /*#__PURE__*/_react.default.cloneElement(item, {
          key: i
        });
      })));
    }

    return null;
  };

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "page-box ".concat(className)
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "basic-view"
  }, !noHeader && renderHeader(), /*#__PURE__*/_react.default.createElement("section", {
    className: (0, _classnames.default)({
      'view-main-body': true,
      'is-spinning': spinning
    })
  }, /*#__PURE__*/_react.default.createElement(_spin.default, {
    className: "basic-view-spin",
    spinning: spinning
  }), /*#__PURE__*/_react.default.createElement(_configProvider.default, {
    getPopupContainer: function getPopupContainer(node) {
      return node && node.closest('.view-main-body') || document.body;
    }
  }, children)), renderFooterAction()));
};

var _default = BasicView;
exports.default = _default;