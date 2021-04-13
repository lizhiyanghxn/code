"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/upload/style");

var _upload = _interopRequireDefault(require("antd/es/upload"));

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _createField = _interopRequireDefault(require("../../BaseForm/createField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 拖动上传组件
 *
 * @param
 */
var ProFormUploadDragger = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '单击或拖动文件到此区域进行上传' : _ref$title,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? /*#__PURE__*/_react.default.createElement(_icons.InboxOutlined, null) : _ref$icon,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? '支持单次或批量上传' : _ref$description,
      action = _ref.action,
      accept = _ref.accept,
      _onChange = _ref.onChange,
      value = _ref.value,
      children = _ref.children,
      max = _ref.max,
      proFieldProps = _ref.proFieldProps;
  // 如果配置了 max ，并且 超过了文件列表的大小，就不展示按钮
  var showUploadButton = (max === undefined || !value || (value === null || value === void 0 ? void 0 : value.length) < max) && (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.mode) !== 'read';
  return /*#__PURE__*/_react.default.createElement(_upload.default.Dragger, _extends({
    // @ts-ignore
    ref: ref,
    name: "files",
    action: action,
    accept: accept,
    fileList: value
  }, fieldProps, {
    onChange: function onChange(info) {
      if (_onChange) {
        _onChange(info);
      }

      if (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onChange) {
        fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onChange(info);
      }
    },
    style: _objectSpread(_objectSpread({}, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style), {}, {
      display: !showUploadButton ? 'none' : undefined
    })
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "ant-upload-drag-icon"
  }, icon), /*#__PURE__*/_react.default.createElement("p", {
    className: "ant-upload-text"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "ant-upload-hint"
  }, description), children);
});

var _default = (0, _createField.default)(ProFormUploadDragger, {
  getValueFromEvent: function getValueFromEvent(value) {
    return value.fileList;
  }
});

exports.default = _default;