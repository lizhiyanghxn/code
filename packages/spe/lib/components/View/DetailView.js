"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicView = _interopRequireDefault(require("./BasicView"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DetailView = function DetailView(props) {
  var _props$leftAttrData = props.leftAttrData,
      leftAttrData = _props$leftAttrData === void 0 ? [] : _props$leftAttrData,
      rightPart = props.rightPart,
      children = props.children,
      rest = _objectWithoutProperties(props, ["leftAttrData", "rightPart", "children"]);

  var getLeftPart = function getLeftPart() {
    return leftAttrData.map(function (attrSection, sectionIndex) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: sectionIndex
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "sub-text-title"
      }, /*#__PURE__*/_react.default.createElement("span", null, attrSection.title)), attrSection.values.map(function (attrItem, index) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "sub-text-content-box line-height-2",
          key: index
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "left-title"
        }, attrItem.attr), /*#__PURE__*/_react.default.createElement("div", {
          className: "right-desc"
        }, attrItem.value));
      }));
    });
  };

  return /*#__PURE__*/_react.default.createElement(_BasicView.default, _extends({}, rest, {
    className: (0, _classnames.default)([rest.className, 'detail-view'])
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "detail-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "detail-text-info"
  }, getLeftPart()), /*#__PURE__*/_react.default.createElement("div", {
    className: "detail-chart-info"
  }, rightPart), children));
};

var _default = DetailView;
exports.default = _default;