"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderExpandIcon = renderExpandIcon;
exports.default = void 0;

require("antd/es/avatar/style");

var _avatar = _interopRequireDefault(require("antd/es/avatar"));

require("antd/es/skeleton/style");

var _skeleton = _interopRequireDefault(require("antd/es/skeleton"));

require("antd/es/list/style");

var _list = _interopRequireDefault(require("antd/es/list"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _dcpCard = _interopRequireDefault(require("dcp-card"));

var _useMergedState3 = _interopRequireDefault(require("rc-util/es/hooks/useMergedState"));

var _icons = require("@ant-design/icons");

var _classnames = _interopRequireDefault(require("classnames"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderExpandIcon(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      _ref$expandIcon = _ref.expandIcon,
      expandIcon = _ref$expandIcon === void 0 ? /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, null) : _ref$expandIcon,
      onExpand = _ref.onExpand,
      expanded = _ref.expanded,
      record = _ref.record;
  var icon = expandIcon;
  var expandClassName = "".concat(prefixCls, "-row-expand-icon");

  var onClick = function onClick(event) {
    onExpand(!expanded);
    event.stopPropagation();
  };

  if (typeof expandIcon === 'function') {
    icon = expandIcon({
      expanded: expanded,
      onExpand: onExpand,
      record: record
    });
  }

  return /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(expandClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-row-expanded"), expanded), _defineProperty(_classNames, "".concat(prefixCls, "-row-collapsed"), !expanded), _classNames)),
    onClick: onClick
  }, icon);
}

function ProListItem(props) {
  var _classNames2;

  var customizePrefixCls = props.prefixCls;

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-list', customizePrefixCls);
  var defaultClassName = "".concat(prefixCls, "-row");

  var title = props.title,
      subTitle = props.subTitle,
      content = props.content,
      restPrefixCls = props.prefixCls,
      actions = props.actions,
      item = props.item,
      recordKey = props.recordKey,
      avatar = props.avatar,
      cardProps = props.cardProps,
      description = props.description,
      isEditable = props.isEditable,
      checkbox = props.checkbox,
      _props$index = props.index,
      index = _props$index === void 0 ? 0 : _props$index,
      selected = props.selected,
      loading = props.loading,
      propsExpand = props.expand,
      propsOnExpand = props.onExpand,
      expandableConfig = props.expandable,
      rowSupportExpand = props.rowSupportExpand,
      showActions = props.showActions,
      type = props.type,
      style = props.style,
      _props$className = props.className,
      propsClassName = _props$className === void 0 ? defaultClassName : _props$className,
      record = props.record,
      rest = _objectWithoutProperties(props, ["title", "subTitle", "content", "prefixCls", "actions", "item", "recordKey", "avatar", "cardProps", "description", "isEditable", "checkbox", "index", "selected", "loading", "expand", "onExpand", "expandable", "rowSupportExpand", "showActions", "type", "style", "className", "record"]);

  var _ref2 = expandableConfig || {},
      expandedRowRender = _ref2.expandedRowRender,
      expandIcon = _ref2.expandIcon,
      expandRowByClick = _ref2.expandRowByClick,
      _ref2$indentSize = _ref2.indentSize,
      indentSize = _ref2$indentSize === void 0 ? 8 : _ref2$indentSize,
      expandedRowClassName = _ref2.expandedRowClassName;

  var _useMergedState = (0, _useMergedState3.default)(!!propsExpand, {
    value: propsExpand,
    onChange: propsOnExpand
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      expanded = _useMergedState2[0],
      onExpand = _useMergedState2[1];

  var className = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, "".concat(propsClassName, "-selected"), selected), _defineProperty(_classNames2, "".concat(propsClassName, "-show-action-hover"), showActions === 'hover'), _defineProperty(_classNames2, "".concat(propsClassName, "-type-").concat(type), type), _defineProperty(_classNames2, "".concat(propsClassName, "-editable"), isEditable), _classNames2), propsClassName);
  var needExpanded = expanded || Object.values(expandableConfig || {}).length === 0;
  var expandedRowDom = expandedRowRender && expandedRowRender(item, index, indentSize, expanded);
  var defaultDom = !cardProps ? /*#__PURE__*/_react.default.createElement(_list.default.Item, _extends({
    actions: actions ? [/*#__PURE__*/_react.default.createElement("div", {
      key: "action",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, actions)] : []
  }, rest, {
    onClick: function onClick() {
      if (expandRowByClick) {
        onExpand(!expanded);
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_skeleton.default, {
    avatar: true,
    title: false,
    loading: loading,
    active: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-header")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-header-option")
  }, checkbox && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-checkbox")
  }, checkbox), Object.values(expandableConfig || {}).length > 0 && rowSupportExpand && renderExpandIcon({
    prefixCls: prefixCls,
    expandIcon: expandIcon,
    onExpand: onExpand,
    expanded: expanded,
    record: record
  })), title || avatar || subTitle || description ? /*#__PURE__*/_react.default.createElement(_list.default.Item.Meta, {
    avatar: avatar,
    title: title || subTitle ? /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(className, "-header-title")
    }, title && /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(className, "-title")
    }, title), subTitle && /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(className, "-subTitle")
    }, subTitle)) : null,
    description: description && needExpanded && /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(className, "-description")
    }, description)
  }) : null), needExpanded && (content || expandedRowDom) && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-content")
  }, content, expandedRowRender && rowSupportExpand && /*#__PURE__*/_react.default.createElement("div", {
    className: expandedRowClassName && expandedRowClassName(item, index, indentSize)
  }, expandedRowDom)))) : /*#__PURE__*/_react.default.createElement(_dcpCard.default, _extends({
    bordered: true,
    loading: loading
  }, cardProps, {
    title: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_avatar.default, {
      size: 22,
      src: avatar,
      className: getPrefixCls('list-item-meta-avatar')
    }), title),
    subTitle: subTitle,
    extra: actions ? [/*#__PURE__*/_react.default.createElement("div", {
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, actions)] : []
  }), content);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, _defineProperty({}, "".concat(className, "-card"), cardProps)),
    style: style
  }, defaultDom);
}

var _default = ProListItem;
exports.default = _default;