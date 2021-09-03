"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Logger;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

require("antd/es/list/style");

var _list = _interopRequireDefault(require("antd/es/list"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireWildcard(require("react"));

var _reactInfiniteScroller = _interopRequireDefault(require("react-infinite-scroller"));

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TabPane = _tabs.default.TabPane;
var Option = _select.default.Option;

function Logger(props) {
  var show = props.show,
      _props$width = props.width,
      width = _props$width === void 0 ? 750 : _props$width,
      logTabs = props.logTabs,
      _props$showRefresh = props.showRefresh,
      showRefresh = _props$showRefresh === void 0 ? true : _props$showRefresh,
      _props$showDownLoad = props.showDownLoad,
      showDownLoad = _props$showDownLoad === void 0 ? false : _props$showDownLoad,
      _props$onRefresh = props.onRefresh,
      onRefresh = _props$onRefresh === void 0 ? function () {} : _props$onRefresh,
      _props$onLoadMore = props.onLoadMore,
      onLoadMore = _props$onLoadMore === void 0 ? function () {} : _props$onLoadMore,
      onClose = props.onClose,
      onDownload = props.onDownload,
      _props$title = props.title,
      title = _props$title === void 0 ? '日志' : _props$title,
      _props$downLoadText = props.downLoadText,
      downLoadText = _props$downLoadText === void 0 ? '下载日志' : _props$downLoadText;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      tabKey = _useState2[0],
      setTabKey = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      processId = _useState4[0],
      setProcessId = _useState4[1];

  (0, _react.useEffect)(function () {
    if (logTabs) {
      var activeTabItem = logTabs.find(function (item) {
        return item.active;
      });
      setTabKey(activeTabItem ? activeTabItem.key : '');
    }
  }, [logTabs]);
  (0, _react.useEffect)(function () {
    if (logTabs) {
      var tabItem = logTabs.find(function (item) {
        return item.key === tabKey;
      });
      setProcessId(tabItem ? tabItem.processId : '');
    }
  }, [logTabs, tabKey]);

  var onSelectChange = function onSelectChange(tabKey, processId) {
    setProcessId(processId);
    onRefresh(tabKey, processId);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_modal.default, {
    title: title,
    centered: true,
    visible: show,
    width: width,
    className: "logger-modal",
    closeIcon: /*#__PURE__*/_react.default.createElement("i", {
      className: "iconfont iconguanbi11"
    }),
    onCancel: onClose,
    footer: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showDownLoad && /*#__PURE__*/_react.default.createElement(_button.default, {
      onClick: onDownload
    }, downLoadText), /*#__PURE__*/_react.default.createElement(_button.default, {
      type: "primary",
      onClick: onClose
    }, "\u786E\u5B9A"))
  }, /*#__PURE__*/_react.default.createElement(_tabs.default, {
    activeKey: tabKey,
    onChange: function onChange(tabKey) {
      return setTabKey(tabKey);
    }
  }, logTabs.map(function (logItem) {
    return /*#__PURE__*/_react.default.createElement(TabPane, {
      tab: "".concat(logItem.title).concat(logItem.active ? '（进行中）' : ''),
      key: logItem.key
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "operate-area"
    }, /*#__PURE__*/_react.default.createElement(_select.default, {
      value: processId,
      style: {
        width: 146
      },
      onChange: function onChange(processId) {
        return onSelectChange(logItem.key, processId);
      }
    }, logItem.processList.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(Option, {
        value: item.value,
        key: item.value
      }, item.label);
    })), showRefresh && /*#__PURE__*/_react.default.createElement("div", {
      className: "refresh-row",
      onClick: function onClick() {
        return onRefresh(logItem.key, logItem.processId);
      }
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "iconfont iconzhongzhi1"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "log-area scroll-small"
    }, /*#__PURE__*/_react.default.createElement(_reactInfiniteScroller.default, {
      initialLoad: false,
      pageStart: 0,
      loadMore: function loadMore(page) {
        return onLoadMore(page, logItem.key, logItem.processId);
      },
      hasMore: !logItem.showLoading,
      useWindow: false
    }, /*#__PURE__*/_react.default.createElement(_list.default, {
      dataSource: logItem.logs,
      locale: {
        emptyText: logItem.emptyMsg
      },
      renderItem: function renderItem(item, index) {
        return /*#__PURE__*/_react.default.createElement(_list.default.Item, {
          key: index
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "log"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "log-time"
        }, item.date), /*#__PURE__*/_react.default.createElement("div", {
          className: "log-content",
          dangerouslySetInnerHTML: {
            __html: item.message
          }
        })));
      }
    })), logItem.showLoading && /*#__PURE__*/_react.default.createElement("div", {
      className: "loading-container"
    }, /*#__PURE__*/_react.default.createElement(_spin.default, null))));
  }))));
}