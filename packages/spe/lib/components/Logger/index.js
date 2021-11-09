"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/list/style");

var _list = _interopRequireDefault(require("antd/es/list"));

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TabPane = _tabs.default.TabPane;
var Option = _select.default.Option;
var logPageConfig = {
  page_size: 20,
  page: 1
};
var defaultLogPageConfig = {
  page_size: 20,
  page: 1
};

var Logger = function Logger(props) {
  var show = props.show,
      _props$showInit = props.showInit,
      showInit = _props$showInit === void 0 ? false : _props$showInit,
      _props$initialLogTabs = props.initialLogTabs,
      initialLogTabs = _props$initialLogTabs === void 0 ? [] : _props$initialLogTabs,
      _props$subTaskIds = props.subTaskIds,
      subTaskIds = _props$subTaskIds === void 0 ? [] : _props$subTaskIds,
      _props$gpuPodNumber = props.gpuPodNumber,
      gpuPodNumber = _props$gpuPodNumber === void 0 ? 1 : _props$gpuPodNumber,
      _props$initialActiveK = props.initialActiveKey,
      initialActiveKey = _props$initialActiveK === void 0 ? 'dataconverter' : _props$initialActiveK,
      logApi = props.logApi,
      _props$onDownload = props.onDownload,
      onDownload = _props$onDownload === void 0 ? function () {} : _props$onDownload,
      _props$onClose = props.onClose,
      onClose = _props$onClose === void 0 ? function () {} : _props$onClose,
      _props$getSubTaskLabe = props.getSubTaskLabel,
      getSubTaskLabel = _props$getSubTaskLabe === void 0 ? function (id) {
    return "\u8D85\u53C2\u4EFB\u52A1".concat(id);
  } : _props$getSubTaskLabe,
      _props$getProcessLabe = props.getProcessLabel,
      getProcessLabel = _props$getProcessLabe === void 0 ? function (id) {
    return "\u8FDB\u7A0B".concat(id);
  } : _props$getProcessLabe,
      _props$showRefresh = props.showRefresh,
      showRefresh = _props$showRefresh === void 0 ? true : _props$showRefresh,
      _props$showDownLoad = props.showDownLoad,
      showDownLoad = _props$showDownLoad === void 0 ? false : _props$showDownLoad,
      _props$width = props.width,
      width = _props$width === void 0 ? 750 : _props$width,
      _props$title = props.title,
      title = _props$title === void 0 ? '日志' : _props$title,
      _props$downLoadText = props.downLoadText,
      downLoadText = _props$downLoadText === void 0 ? '下载日志' : _props$downLoadText,
      _props$confirmText = props.confirmText,
      confirmText = _props$confirmText === void 0 ? '确定' : _props$confirmText,
      _props$logEmptyMsg = props.logEmptyMsg,
      logEmptyMsg = _props$logEmptyMsg === void 0 ? '日志为空' : _props$logEmptyMsg;

  var _useState = (0, _react.useState)(subTaskIds === null || subTaskIds === void 0 ? void 0 : subTaskIds[0]),
      _useState2 = _slicedToArray(_useState, 2),
      subTaskId = _useState2[0],
      setSubTaskId = _useState2[1];

  var _useState3 = (0, _react.useState)(initialActiveKey),
      _useState4 = _slicedToArray(_useState3, 2),
      activeKey = _useState4[0],
      setActiveKey = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      activeProcessId = _useState6[0],
      setActiveProcessId = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      hasMore = _useState8[0],
      setHasMore = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = (0, _react.useState)(true),
      _useState12 = _slicedToArray(_useState11, 2),
      isReverse = _useState12[0],
      setIsReverse = _useState12[1];

  var _useState13 = (0, _react.useState)(initialLogTabs),
      _useState14 = _slicedToArray(_useState13, 2),
      logTabs = _useState14[0],
      setLogTabs = _useState14[1];

  var axiosCanceler = (0, _react.useRef)(null);
  var scrollNodeRefs = (0, _react.useRef)(logTabs.map(function () {
    return /*#__PURE__*/_react.default.createRef();
  }));
  (0, _react.useEffect)(function () {
    if (showInit) {
      showLog();
    }
  }, [showInit]);

  var loggerRefresh = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setHasMore(true);
              setLogTabs(function (logTabs) {
                return logTabs.map(function (tab) {
                  return _objectSpread(_objectSpread({}, tab), {}, {
                    logs: []
                  });
                });
              });
              setIsReverse(true);
              fetchLogs({
                pageConfig: defaultLogPageConfig
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loggerRefresh() {
      return _ref.apply(this, arguments);
    };
  }();

  var onQuickSkipTop = function onQuickSkipTop() {
    setIsReverse(false);
    setLogTabs(function (logTabs) {
      return logTabs.map(function (tab) {
        return _objectSpread(_objectSpread({}, tab), {}, {
          logs: []
        });
      });
    });
    logPageConfig = _objectSpread(_objectSpread({}, defaultLogPageConfig), {}, {
      page: 1
    });
    fetchLogs({
      pageConfig: logPageConfig,
      reverse: false
    });
  };

  var onQuickSkipBottom = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsReverse(true);
              setLogTabs(function (logTabs) {
                return logTabs.map(function (tab) {
                  return _objectSpread(_objectSpread({}, tab), {}, {
                    logs: []
                  });
                });
              });
              fetchLogs({
                pageConfig: defaultLogPageConfig
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onQuickSkipBottom() {
      return _ref2.apply(this, arguments);
    };
  }();

  var loggerLoadMore = function loggerLoadMore() {
    if (loading) {
      return;
    }

    var newConfig = _objectSpread(_objectSpread({}, logPageConfig), {}, {
      page: isReverse ? logPageConfig.page - 1 : logPageConfig.page + 1
    });

    logPageConfig = newConfig;
    fetchLogs({
      pageConfig: newConfig,
      isLoadMore: true,
      reverse: isReverse
    });
  };

  var setLogSubTaskId = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setHasMore(true);
              setSubTaskId(id);
              setActiveKey(initialActiveKey);
              setActiveProcessId(0);
              setLogTabs(function (logTabs) {
                return logTabs.map(function (tab) {
                  return _objectSpread(_objectSpread({}, tab), {}, {
                    logs: []
                  });
                });
              });
              setIsReverse(true);
              fetchLogs({
                pageConfig: defaultLogPageConfig,
                taskId: id,
                job: initialActiveKey,
                process: 0
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function setLogSubTaskId(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var setLogActiveTab = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(tabKey) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setHasMore(true);
              setActiveKey(tabKey);
              setActiveProcessId(0);
              setLogTabs(function (logTabs) {
                return logTabs.map(function (tab) {
                  return _objectSpread(_objectSpread({}, tab), {}, {
                    logs: []
                  });
                });
              });
              setIsReverse(true);
              fetchLogs({
                pageConfig: defaultLogPageConfig,
                job: tabKey,
                process: 0
              });

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function setLogActiveTab(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var setLogProgressId = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setHasMore(true);
              setActiveProcessId(id);
              setLogTabs(function (logTabs) {
                return logTabs.map(function (tab) {
                  return _objectSpread(_objectSpread({}, tab), {}, {
                    logs: []
                  });
                });
              });
              setIsReverse(true);
              fetchLogs({
                pageConfig: defaultLogPageConfig,
                process: id
              });

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function setLogProgressId(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  var showLog = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              updateLogTabs();
              setSubTaskId(subTaskIds === null || subTaskIds === void 0 ? void 0 : subTaskIds[0]);
              setActiveKey(initialActiveKey);
              setActiveProcessId(0);
              setHasMore(true);
              fetchLogs({
                pageConfig: defaultLogPageConfig,
                taskId: subTaskIds === null || subTaskIds === void 0 ? void 0 : subTaskIds[0],
                job: initialActiveKey,
                process: 0
              });

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function showLog() {
      return _ref6.apply(this, arguments);
    };
  }();
  /** 初始化清空日志内容 */


  var updateLogTabs = function updateLogTabs() {
    var processList = [];

    for (var i = 0; i < gpuPodNumber; i++) {
      processList.push({
        label: getProcessLabel(i),
        value: i
      });
    }

    logTabs.forEach(function (tab) {
      if (tab.key === initialActiveKey) {
        tab.title = tab.activeTitle;
      } else {
        tab.title = tab.defaultTitle;
      }
    });
    var newLogTabs = logTabs.slice(0);
    newLogTabs[0].logs = [];
    newLogTabs[1].logs = [];
    newLogTabs[1].processList = processList;
    setLogTabs(newLogTabs);
  };

  var fetchLogs = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref7) {
      var _ref7$pageConfig, pageConfig, _ref7$isLoadMore, isLoadMore, _ref7$reverse, reverse, _ref7$taskId, taskId, _ref7$job, job, _ref7$process, process, list, total, maxPageIndex, res, appendList, _res, tabIndex, tab, newLogs, newTabs, ele;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _ref7$pageConfig = _ref7.pageConfig, pageConfig = _ref7$pageConfig === void 0 ? {} : _ref7$pageConfig, _ref7$isLoadMore = _ref7.isLoadMore, isLoadMore = _ref7$isLoadMore === void 0 ? false : _ref7$isLoadMore, _ref7$reverse = _ref7.reverse, reverse = _ref7$reverse === void 0 ? true : _ref7$reverse, _ref7$taskId = _ref7.taskId, taskId = _ref7$taskId === void 0 ? subTaskId : _ref7$taskId, _ref7$job = _ref7.job, job = _ref7$job === void 0 ? activeKey : _ref7$job, _ref7$process = _ref7.process, process = _ref7$process === void 0 ? activeProcessId : _ref7$process;
              setLoading(true);
              axiosCanceler.current && axiosCanceler.current();
              list = [];
              total = 0;

              if (!(!isLoadMore && reverse)) {
                _context7.next = 20;
                break;
              }

              _context7.next = 8;
              return calcMaxPageIndex({
                taskId: taskId,
                job: job,
                process: process
              });

            case 8:
              maxPageIndex = _context7.sent;

              if (!(maxPageIndex !== 0)) {
                _context7.next = 18;
                break;
              }

              _context7.next = 12;
              return logApi(_objectSpread(_objectSpread({}, pageConfig), {}, {
                page: maxPageIndex,
                sub_task_id: taskId,
                task_job_name: job,
                process_id: process
              }), {
                showErr: false,
                onCancel: function onCancel(c) {
                  axiosCanceler.current = c;
                }
              }).then(function (res) {
                logPageConfig.page = maxPageIndex;
                return res;
              });

            case 12:
              res = _context7.sent;
              _context7.next = 15;
              return logApi(_objectSpread(_objectSpread({}, pageConfig), {}, {
                page: maxPageIndex - 1,
                sub_task_id: taskId,
                task_job_name: job,
                process_id: process
              }), {
                showErr: false,
                onCancel: function onCancel(c) {
                  axiosCanceler.current = c;
                }
              }).then(function (res) {
                logPageConfig.page = maxPageIndex - 1;
                return res.list;
              });

            case 15:
              appendList = _context7.sent;
              list = appendList.concat(res.list);
              total = res.total;

            case 18:
              _context7.next = 25;
              break;

            case 20:
              _context7.next = 22;
              return logApi(_objectSpread(_objectSpread({}, pageConfig), {}, {
                sub_task_id: taskId,
                task_job_name: job,
                process_id: process
              }), {
                showErr: false,
                onCancel: function onCancel(c) {
                  axiosCanceler.current = c;
                }
              });

            case 22:
              _res = _context7.sent;
              list = _res.list;
              total = _res.total;

            case 25:
              tabIndex = logTabs.findIndex(function (tab) {
                return tab.key === job;
              });
              tab = logTabs[tabIndex];
              newLogs = isLoadMore ? reverse ? list.concat(tab.logs) : tab.logs.concat(list) : list;
              newTabs = logTabs.slice();
              newTabs[tabIndex] = _objectSpread(_objectSpread({}, tab), {}, {
                logs: newLogs
              });
              setLogTabs(newTabs);
              setLoading(false);
              setHasMore(newLogs.length < total && list.length > 0); // 这里多加一个条件，list无数据结束掉更多请求
              // 反向初次加载，滚动条滑到底部

              if (!isLoadMore && reverse) {
                ele = scrollNodeRefs.current[tabIndex].current;
                ele && (ele.scrollTop = ele.scrollHeight);
              }

            case 34:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function fetchLogs(_x4) {
      return _ref8.apply(this, arguments);
    };
  }();

  var calcMaxPageIndex = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref9) {
      var _ref9$taskId, taskId, _ref9$job, job, _ref9$process, process, _yield$logApi, total, pageSize, maxPageIndex;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _ref9$taskId = _ref9.taskId, taskId = _ref9$taskId === void 0 ? subTaskId : _ref9$taskId, _ref9$job = _ref9.job, job = _ref9$job === void 0 ? activeKey : _ref9$job, _ref9$process = _ref9.process, process = _ref9$process === void 0 ? activeProcessId : _ref9$process;
              _context8.next = 3;
              return logApi({
                page_size: 1,
                page: 1,
                sub_task_id: taskId,
                task_job_name: job,
                process_id: process
              }, {
                showErr: false,
                onCancel: function onCancel(c) {
                  axiosCanceler.current = c;
                }
              });

            case 3:
              _yield$logApi = _context8.sent;
              total = _yield$logApi.total;
              pageSize = logPageConfig.page_size;
              maxPageIndex = Math.floor(total / pageSize) + 1;
              if (total === 0) maxPageIndex = 0; // 小优化

              return _context8.abrupt("return", maxPageIndex);

            case 9:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function calcMaxPageIndex(_x5) {
      return _ref10.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_modal.default, {
    title: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, title, (subTaskIds === null || subTaskIds === void 0 ? void 0 : subTaskIds.length) ? /*#__PURE__*/_react.default.createElement(_select.default, {
      value: subTaskId,
      onChange: setLogSubTaskId
    }, subTaskIds.map(function (taskId) {
      return /*#__PURE__*/_react.default.createElement(Option, {
        value: taskId,
        key: taskId
      }, getSubTaskLabel(taskId));
    })) : ''),
    centered: true,
    visible: show,
    width: width,
    wrapClassName: "logger-modal-comp",
    closeIcon: /*#__PURE__*/_react.default.createElement("i", {
      className: "iconfont iconguanbi11"
    }),
    onCancel: function onCancel() {
      return onClose(false);
    },
    footer: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showDownLoad && /*#__PURE__*/_react.default.createElement(_button.default, {
      onClick: onDownload
    }, downLoadText), /*#__PURE__*/_react.default.createElement(_button.default, {
      type: "primary",
      onClick: function onClick() {
        return onClose(false);
      }
    }, confirmText))
  }, /*#__PURE__*/_react.default.createElement(_tabs.default, {
    activeKey: activeKey,
    onChange: setLogActiveTab
  }, logTabs.map(function (logItem, index) {
    return /*#__PURE__*/_react.default.createElement(TabPane, {
      tab: logItem.title,
      key: logItem.key
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "operate-area"
    }, /*#__PURE__*/_react.default.createElement(_select.default, {
      value: activeProcessId,
      style: {
        width: 146
      },
      onChange: setLogProgressId
    }, logItem.processList.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(Option, {
        value: item.value,
        key: item.value
      }, item.label);
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "right-top-btns"
    }, /*#__PURE__*/_react.default.createElement(_button.default, {
      className: "quick-skip",
      onClick: onQuickSkipTop,
      icon: /*#__PURE__*/_react.default.createElement("i", {
        className: "iconfont iconquicktop"
      })
    }), /*#__PURE__*/_react.default.createElement(_button.default, {
      className: "quick-skip",
      onClick: onQuickSkipBottom,
      icon: /*#__PURE__*/_react.default.createElement("i", {
        className: "iconfont iconquickbuttom"
      })
    }), showRefresh && /*#__PURE__*/_react.default.createElement(_button.default, {
      className: "refresh-row",
      onClick: loggerRefresh,
      icon: /*#__PURE__*/_react.default.createElement("i", {
        className: "iconfont iconshuaxin2"
      })
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "log-area scroll-small",
      ref: scrollNodeRefs.current[index]
    }, /*#__PURE__*/_react.default.createElement(_reactInfiniteScroller.default, {
      initialLoad: false,
      isReverse: isReverse,
      pageStart: 0,
      loadMore: loggerLoadMore,
      hasMore: hasMore && !loading,
      useWindow: false,
      threshold: 300
    }, loading && isReverse && /*#__PURE__*/_react.default.createElement("div", {
      className: "loading-container"
    }, /*#__PURE__*/_react.default.createElement(_spin.default, null)), /*#__PURE__*/_react.default.createElement(_list.default, {
      dataSource: logItem.logs,
      locale: {
        emptyText: hasMore || loading ? '' : logEmptyMsg
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
    }, loading && !isReverse && /*#__PURE__*/_react.default.createElement("div", {
      className: "loading-container"
    }, /*#__PURE__*/_react.default.createElement(_spin.default, null))))));
  }))));
};

var _default = Logger;
exports.default = _default;