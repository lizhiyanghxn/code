"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

require("antd/es/space/style");

var _space = _interopRequireDefault(require("antd/es/space"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _react = _interopRequireWildcard(require("react"));

var _dcpProvider = require("@dcp-fe/dcp-provider");

var _classnames = _interopRequireDefault(require("classnames"));

var _dcpUtils = require("@dcp-fe/dcp-utils");

var _HeaderMenu = _interopRequireDefault(require("./HeaderMenu"));

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 获取配置区域 DOM Item
 *
 * @param setting 配置项
 */
function getSettingItem(setting) {
  if ( /*#__PURE__*/_react.default.isValidElement(setting)) {
    return setting;
  }

  if (setting) {
    var settingConfig = setting;
    var icon = settingConfig.icon,
        tooltip = settingConfig.tooltip,
        _onClick = settingConfig.onClick,
        key = settingConfig.key;

    if (icon && tooltip) {
      return /*#__PURE__*/_react.default.createElement(_tooltip.default, {
        title: tooltip
      }, /*#__PURE__*/_react.default.createElement("span", {
        key: key,
        onClick: function onClick() {
          if (_onClick) {
            _onClick(key);
          }
        }
      }, icon));
    }

    return icon;
  }

  return null;
}

var ListToolBar = function ListToolBar(_ref) {
  var customizePrefixCls = _ref.prefixCls,
      title = _ref.title,
      subTitle = _ref.subTitle,
      tooltip = _ref.tooltip,
      className = _ref.className,
      style = _ref.style,
      search = _ref.search,
      onSearch = _ref.onSearch,
      _ref$multipleLine = _ref.multipleLine,
      multipleLine = _ref$multipleLine === void 0 ? false : _ref$multipleLine,
      filter = _ref.filter,
      _ref$actions = _ref.actions,
      actions = _ref$actions === void 0 ? [] : _ref$actions,
      _ref$settings = _ref.settings,
      settings = _ref$settings === void 0 ? [] : _ref$settings,
      _ref$tabs = _ref.tabs,
      tabs = _ref$tabs === void 0 ? {} : _ref$tabs,
      menu = _ref.menu;
  var intl = (0, _dcpProvider.useIntl)();
  /**
   * 获取搜索栏 DOM
   *
   * @param search 搜索框相关配置
   */

  var getSearchInput = function getSearchInput(searchObject) {
    if (!searchObject) {
      return null;
    }

    if ( /*#__PURE__*/_react.default.isValidElement(searchObject)) {
      return searchObject;
    }

    return /*#__PURE__*/_react.default.createElement(_input.default.Search, _extends({
      style: {
        width: 200
      },
      placeholder: intl.getMessage('tableForm.inputPlaceholder', '请输入'),
      onSearch: onSearch
    }, searchObject));
  };

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-table-list-toolbar', customizePrefixCls);
  /** 根据配置自动生成的查询框 */

  var searchNode = getSearchInput(search);
  /** 轻量筛选组件 */

  var filtersNode = filter ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-filter")
  }, filter) : null;
  /** 有没有 title，判断了多个场景 */

  var hasTitle = menu || title || subTitle || tooltip;
  /** 没有 key 的时候帮忙加一下 key 不加的话很烦人 */

  var renderActionsDom = function renderActionsDom() {
    if (!Array.isArray(actions)) {
      return actions;
    }

    if (actions.length < 1) {
      return null;
    }

    return /*#__PURE__*/_react.default.createElement(_space.default, {
      align: "center"
    }, actions.map(function (action, index) {
      if (! /*#__PURE__*/_react.default.isValidElement(action)) {
        // eslint-disable-next-line react/no-array-index-key
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
          key: index
        }, action);
      }

      return /*#__PURE__*/_react.default.cloneElement(action, _objectSpread({
        // eslint-disable-next-line react/no-array-index-key
        key: index
      }, action === null || action === void 0 ? void 0 : action.props));
    }));
  };

  var actionDom = renderActionsDom();
  return /*#__PURE__*/_react.default.createElement("div", {
    style: style,
    className: (0, _classnames.default)("".concat(prefixCls), className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-container")
  }, /*#__PURE__*/_react.default.createElement(_space.default, {
    className: "".concat(prefixCls, "-left")
  }, tooltip || title || subTitle ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-title")
  }, /*#__PURE__*/_react.default.createElement(_dcpUtils.LabelIconTip, {
    tooltip: tooltip,
    label: title,
    subTitle: subTitle
  })) : null, menu && /*#__PURE__*/_react.default.createElement(_HeaderMenu.default, _extends({}, menu, {
    prefixCls: prefixCls
  })), !hasTitle && searchNode && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-search")
  }, searchNode)), /*#__PURE__*/_react.default.createElement(_space.default, {
    className: "".concat(prefixCls, "-right"),
    size: 16
  }, hasTitle && searchNode ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-search")
  }, searchNode) : null, !multipleLine ? filtersNode : null, actionDom, (settings === null || settings === void 0 ? void 0 : settings.length) ? /*#__PURE__*/_react.default.createElement(_space.default, {
    size: 12,
    align: "center",
    className: "".concat(prefixCls, "-setting-items")
  }, settings.map(function (setting, index) {
    var settingItem = getSettingItem(setting);
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react.default.createElement("div", {
        key: index,
        className: "".concat(prefixCls, "-setting-item")
      }, settingItem)
    );
  })) : null)), multipleLine ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-extra-line")
  }, tabs.items && tabs.items.length ? /*#__PURE__*/_react.default.createElement(_tabs.default, {
    onChange: tabs.onChange,
    tabBarExtraContent: filtersNode
  }, tabs.items.map(function (tab) {
    return /*#__PURE__*/_react.default.createElement(_tabs.default.TabPane, tab);
  })) : filtersNode) : null);
};

var _default = ListToolBar;
exports.default = _default;