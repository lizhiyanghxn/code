"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Logger;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

require("antd/es/list/style");

var _list = _interopRequireDefault(require("antd/es/list"));

var _react = _interopRequireDefault(require("react"));

var _reactInfiniteScroller = _interopRequireDefault(require("react-infinite-scroller"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Logger(props) {
  var show = props.show,
      showLoading = props.showLoading,
      _props$width = props.width,
      width = _props$width === void 0 ? 800 : _props$width,
      hasMore = props.hasMore,
      hasLoadedData = props.hasLoadedData,
      logs = props.logs,
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
      _props$logEmptyMsg = props.logEmptyMsg,
      logEmptyMsg = _props$logEmptyMsg === void 0 ? '日志为空' : _props$logEmptyMsg,
      _props$title = props.title,
      title = _props$title === void 0 ? '日志' : _props$title;
  var emptyMsg = logs.length === 0 && hasLoadedData ? logEmptyMsg : '.';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_modal.default, {
    title: title,
    centered: true,
    visible: show,
    width: width,
    closeIcon: /*#__PURE__*/_react.default.createElement("i", {
      className: "iconfont iconguanbi11"
    }),
    onCancel: onClose,
    footer: null
  }, showRefresh && /*#__PURE__*/_react.default.createElement("div", {
    className: "refresh-row",
    onClick: onRefresh
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "iconfont iconzhongzhi1"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "log-area scroll-small"
  }, /*#__PURE__*/_react.default.createElement(_reactInfiniteScroller.default, {
    initialLoad: false,
    pageStart: 0,
    loadMore: onLoadMore,
    hasMore: !showLoading && hasMore,
    useWindow: false
  }, /*#__PURE__*/_react.default.createElement(_list.default, {
    dataSource: logs,
    locale: {
      emptyText: emptyMsg
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
  })), showLoading && hasMore && /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-container"
  }, /*#__PURE__*/_react.default.createElement(_spin.default, null))), showDownLoad && /*#__PURE__*/_react.default.createElement("div", {
    className: "bottom-area"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "link",
    size: "small",
    className: "btn-link-custom",
    onClick: onDownload
  }, "\u4E0B\u8F7D\u65E5\u5FD7"))));
}