"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/divider/style");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = require("../../utils");

var _icons = require("@ant-design/icons");

require("./index.scss");

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

var PageInput = function PageInput(props) {
  var jumpSkip = props.jumpSkip,
      imgIndex = props.imgIndex;

  var _useState = (0, _react.useState)(imgIndex),
      _useState2 = _slicedToArray(_useState, 2),
      newIndex = _useState2[0],
      setIndex = _useState2[1];

  var inputEl = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setIndex(imgIndex + 1);
  }, [imgIndex]);

  var newHandleJump = function newHandleJump(e) {
    var reg = /^\d*$/;

    if (reg.test(e.target.value)) {
      setIndex(e.target.value);
    }
  };

  var newJumpSkip = function newJumpSkip(e) {
    if (e.keyCode === 13) {
      jumpSkip(e.target.value);

      if (inputEl === null || inputEl === void 0 ? void 0 : inputEl.current) {
        inputEl.current.blur();
      }
    }
  };

  return /*#__PURE__*/_react.default.createElement(_input.default, {
    className: "pageInput",
    value: newIndex,
    ref: inputEl,
    onChange: newHandleJump,
    onKeyDown: newJumpSkip,
    onBlur: newJumpSkip
  });
};

var ImageAnalysis = function ImageAnalysis(props) {
  var className = props.className,
      _props$total = props.total,
      total = _props$total === void 0 ? 0 : _props$total,
      _props$currentIndex = props.currentIndex,
      currentIndex = _props$currentIndex === void 0 ? 0 : _props$currentIndex,
      searchParams = props.searchParams,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      canvasSlotRef = props.canvasSlotRef,
      canvasSlotRef2 = props.canvasSlotRef2,
      _props$setSwiperModal = props.setSwiperModalShow,
      setSwiperModalShow = _props$setSwiperModal === void 0 ? function () {} : _props$setSwiperModal,
      _props$setClientSize = props.setClientSize,
      setClientSize = _props$setClientSize === void 0 ? function () {} : _props$setClientSize,
      _props$setCurrentInde = props.setCurrentIndex,
      setCurrentIndex = _props$setCurrentInde === void 0 ? function () {} : _props$setCurrentInde,
      getSwiperImages = props.getSwiperImages,
      MainSlot = props.MainSlot,
      RightInfoSlot = props.RightInfoSlot,
      BottomControlSlot = props.BottomControlSlot,
      TopTipsSlot = props.TopTipsSlot;

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      zoom = _useState4[0],
      setZoom = _useState4[1];

  var _useState5 = (0, _react.useState)({
    x: 0,
    y: 0
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      pos = _useState6[0],
      setPos = _useState6[1];

  var _useState7 = (0, _react.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      zoom2 = _useState8[0],
      setZoom2 = _useState8[1];

  var _useState9 = (0, _react.useState)({
    x: 0,
    y: 0
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      pos2 = _useState10[0],
      setPos2 = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      hoverLabel = _useState12[0],
      setHoverLabel = _useState12[1];

  var _useState13 = (0, _react.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      localSearchParams = _useState14[0],
      setLocalSearchParams = _useState14[1];

  var cnavsWrapEl = (0, _react.useRef)(null);
  var close1 = (0, _react.useRef)(false);
  var close2 = (0, _react.useRef)(false);

  var getClientSize = function getClientSize() {
    if (cnavsWrapEl.current) {
      setClientSize({
        width: cnavsWrapEl.current.clientWidth,
        height: cnavsWrapEl.current.clientHeight
      });
    }
  };

  (0, _react.useEffect)(function () {
    if (cnavsWrapEl.current) {
      window.addEventListener('resize', getClientSize);
      setClientSize({
        width: cnavsWrapEl.current.clientWidth,
        height: cnavsWrapEl.current.clientHeight
      });
    }

    return function () {
      window.removeEventListener('resize', getClientSize);
    };
  }, [currentIndex]);
  (0, _react.useEffect)(function () {
    if (searchParams) {
      setLocalSearchParams(_lodash.default.cloneDeep(searchParams));
    }
  }, []);
  var setClose1False = (0, _utils.debounce)(function () {
    close1.current = false;
  }, 500);
  var setClose2False = (0, _utils.debounce)(function () {
    close2.current = false;
  }, 500);
  /** 两个canvas的坐标和缩放互相跟踪 利用防抖做开关，防止两个useEffect互相触发 */

  (0, _react.useEffect)(function () {
    var _canvasSlotRef2$curre, _canvasSlotRef2$curre2;

    if ((canvasSlotRef2 === null || canvasSlotRef2 === void 0 ? void 0 : (_canvasSlotRef2$curre = canvasSlotRef2.current) === null || _canvasSlotRef2$curre === void 0 ? void 0 : (_canvasSlotRef2$curre2 = _canvasSlotRef2$curre.toolInstance) === null || _canvasSlotRef2$curre2 === void 0 ? void 0 : _canvasSlotRef2$curre2.imgNode) && !close1.current) {
      close2.current = true;
      var toolInstance = canvasSlotRef2.current.toolInstance;
      toolInstance.innerZoom = zoom;
      toolInstance.zoom = zoom;
      toolInstance.currentPos = pos;
      toolInstance.currentPosStorage = pos;
      toolInstance.emit('renderZoom');
      toolInstance.emit('dependRender');
      toolInstance.render();
    }

    setClose2False();
  }, [zoom, pos]);
  (0, _react.useEffect)(function () {
    var _canvasSlotRef$curren, _canvasSlotRef$curren2;

    if ((canvasSlotRef === null || canvasSlotRef === void 0 ? void 0 : (_canvasSlotRef$curren = canvasSlotRef.current) === null || _canvasSlotRef$curren === void 0 ? void 0 : (_canvasSlotRef$curren2 = _canvasSlotRef$curren.toolInstance) === null || _canvasSlotRef$curren2 === void 0 ? void 0 : _canvasSlotRef$curren2.imgNode) && !close2.current) {
      close1.current = true;
      var toolInstance = canvasSlotRef.current.toolInstance;
      toolInstance.innerZoom = zoom2;
      toolInstance.zoom = zoom2;
      toolInstance.currentPos = pos2;
      toolInstance.currentPosStorage = pos2;
      toolInstance.emit('renderZoom');
      toolInstance.emit('dependRender');
      toolInstance.render();
    }

    setClose1False();
  }, [zoom2, pos2]);

  var skipOperation = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(operator) {
      var skipIndex,
          skipNum,
          newIndex,
          maxPage,
          newPage,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              skipIndex = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';
              skipNum = parseInt(skipIndex, 10);

              if (!(skipNum > total)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              newIndex = currentIndex; // 跳转判断

              _context.t0 = operator;
              _context.next = _context.t0 === 'Backward' ? 8 : _context.t0 === 'Forward' ? 19 : _context.t0 === 'QuickBackward' ? 30 : _context.t0 === 'QuickForward' ? 36 : _context.t0 === 'JumpSkip' ? 43 : 50;
              break;

            case 8:
              if (!(currentIndex === 0 && localSearchParams.page === 1)) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return");

            case 10:
              if (!(currentIndex === 0)) {
                _context.next = 17;
                break;
              }

              _context.next = 13;
              return getSwiperImages(_objectSpread(_objectSpread({}, localSearchParams), {}, {
                page: localSearchParams.page - 1
              }));

            case 13:
              setLocalSearchParams(function (params) {
                return _objectSpread(_objectSpread({}, params), {}, {
                  page: params.page - 1
                });
              });
              newIndex = localSearchParams.page_size - 1;
              _context.next = 18;
              break;

            case 17:
              newIndex = currentIndex - 1;

            case 18:
              return _context.abrupt("break", 51);

            case 19:
              if (!((localSearchParams.page - 1) * localSearchParams.page_size + currentIndex + 1 === total)) {
                _context.next = 21;
                break;
              }

              return _context.abrupt("return");

            case 21:
              if (!(currentIndex === localSearchParams.page_size - 1)) {
                _context.next = 28;
                break;
              }

              _context.next = 24;
              return getSwiperImages(_objectSpread(_objectSpread({}, localSearchParams), {}, {
                page: localSearchParams.page + 1
              }));

            case 24:
              setLocalSearchParams(function (params) {
                return _objectSpread(_objectSpread({}, params), {}, {
                  page: params.page + 1
                });
              });
              newIndex = 0;
              _context.next = 29;
              break;

            case 28:
              newIndex = currentIndex + 1;

            case 29:
              return _context.abrupt("break", 51);

            case 30:
              if (!(localSearchParams.page !== 1)) {
                _context.next = 34;
                break;
              }

              _context.next = 33;
              return getSwiperImages(_objectSpread(_objectSpread({}, localSearchParams), {}, {
                page: 1
              }));

            case 33:
              setLocalSearchParams(function (params) {
                return _objectSpread(_objectSpread({}, params), {}, {
                  page: 1
                });
              });

            case 34:
              newIndex = 0;
              return _context.abrupt("break", 51);

            case 36:
              maxPage = Math.ceil(total / localSearchParams.page_size);

              if (!(localSearchParams.page !== maxPage)) {
                _context.next = 41;
                break;
              }

              _context.next = 40;
              return getSwiperImages(_objectSpread(_objectSpread({}, localSearchParams), {}, {
                page: maxPage
              }));

            case 40:
              setLocalSearchParams(function (params) {
                return _objectSpread(_objectSpread({}, params), {}, {
                  page: maxPage
                });
              });

            case 41:
              newIndex = (total - 1) % localSearchParams.page_size;
              return _context.abrupt("break", 51);

            case 43:
              newPage = Math.ceil(skipNum / localSearchParams.page_size);

              if (!(localSearchParams.page !== newPage)) {
                _context.next = 48;
                break;
              }

              _context.next = 47;
              return getSwiperImages(_objectSpread(_objectSpread({}, localSearchParams), {}, {
                page: newPage
              }));

            case 47:
              setLocalSearchParams(function (params) {
                return _objectSpread(_objectSpread({}, params), {}, {
                  page: newPage
                });
              });

            case 48:
              newIndex = (skipNum - 1) % localSearchParams.page_size;
              return _context.abrupt("break", 51);

            case 50:
              newIndex = currentIndex;

            case 51:
              setCurrentIndex(newIndex);

            case 52:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function skipOperation(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var onInitialPosition = function onInitialPosition() {
    if (canvasSlotRef.current) {
      var toolInstance = canvasSlotRef.current.toolInstance;
      toolInstance.initImgPos();
    }

    if (canvasSlotRef2 === null || canvasSlotRef2 === void 0 ? void 0 : canvasSlotRef2.current) {
      var _toolInstance = canvasSlotRef2.current.toolInstance;

      _toolInstance.initImgPos();
    }
  };

  var onZoomControl = function onZoomControl() {
    var islarger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (canvasSlotRef.current) {
      var toolInstance = canvasSlotRef.current.toolInstance;
      toolInstance.zoomChanged(islarger);
    }

    if (canvasSlotRef2 === null || canvasSlotRef2 === void 0 ? void 0 : canvasSlotRef2.current) {
      var _toolInstance2 = canvasSlotRef2.current.toolInstance;

      _toolInstance2.zoomChanged(islarger);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(['image-analysis-comp', className])
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "close-modal-btn",
    ghost: true,
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "iconfont iconclose"
    }),
    onClick: function onClick() {
      return setSwiperModalShow(false);
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "model-content"
  }, loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_spin.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "maintain"
  })) : /*#__PURE__*/_react.default.createElement("div", {
    className: "main-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "left-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "annotation-wrap",
    ref: cnavsWrapEl
  }, TopTipsSlot && /*#__PURE__*/_react.default.createElement(TopTipsSlot, {
    className: "top-tips"
  }), MainSlot && /*#__PURE__*/_react.default.createElement(MainSlot, {
    setZoom: setZoom,
    setPos: setPos,
    setZoom2: setZoom2,
    setPos2: setPos2,
    setHoverLabel: setHoverLabel,
    hoverLabel: hoverLabel
  })), /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "arrow left-arrow",
    ghost: true,
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "iconfont iconfangxiangzuo"
    }),
    onClick: function onClick() {
      return skipOperation('Backward');
    }
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "arrow right-arrow",
    ghost: true,
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "iconfont iconfangxiangyou"
    }),
    onClick: function onClick() {
      return skipOperation('Forward');
    }
  })), RightInfoSlot && /*#__PURE__*/_react.default.createElement(RightInfoSlot, {
    className: "right-block",
    hoverLabel: hoverLabel
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "foot-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "foot-content-right"
  }, BottomControlSlot && /*#__PURE__*/_react.default.createElement(BottomControlSlot, {
    className: "bottom-control"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "swiper-pagination"
  }, /*#__PURE__*/_react.default.createElement(_icons.DoubleLeftOutlined, {
    className: "highlight",
    onClick: function onClick() {
      return skipOperation('QuickBackward');
    }
  }), /*#__PURE__*/_react.default.createElement(_icons.LeftOutlined, {
    className: "highlight",
    onClick: function onClick() {
      return skipOperation('Backward');
    }
  }), /*#__PURE__*/_react.default.createElement(PageInput, {
    imgIndex: ((localSearchParams === null || localSearchParams === void 0 ? void 0 : localSearchParams.page_size) * ((localSearchParams === null || localSearchParams === void 0 ? void 0 : localSearchParams.page) - 1) || 0) + currentIndex,
    jumpSkip: function jumpSkip(e) {
      return skipOperation('JumpSkip', e);
    }
  }), "/", /*#__PURE__*/_react.default.createElement("span", {
    className: "pageAll"
  }, total), /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, {
    className: "highlight",
    onClick: function onClick() {
      return skipOperation('Forward');
    }
  }), /*#__PURE__*/_react.default.createElement(_icons.DoubleRightOutlined, {
    className: "highlight",
    onClick: function onClick() {
      return skipOperation('QuickForward');
    }
  })), /*#__PURE__*/_react.default.createElement(_divider.default, {
    type: "vertical",
    style: {
      background: 'rgba(153, 153, 153, 1)',
      height: '16px'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "zoomController"
  }, /*#__PURE__*/_react.default.createElement(_icons.MinusOutlined, {
    className: "highlight",
    onClick: function onClick() {
      return onZoomControl(false);
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "zoomText",
    onClick: onInitialPosition
  }, /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 16 16",
    className: "adaptIcon",
    onClick: function onClick() {}
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "icon_adapt",
    transform: "translate(-1021.825 -996)"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    fill: "none",
    width: "16",
    height: "16",
    transform: "translate(1021.825 996)"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    fill: "#fff",
    width: "8",
    height: "7",
    transform: "translate(1025.825 1000.167)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    d: "M3,4V1H0V0H4V4Z",
    transform: "translate(1033.825 997)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    d: "M0,4V3H3V0H4V4Z",
    transform: "translate(1025.825 1001.001) rotate(180)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    d: "M3,4V1H0V0H4V4Z",
    transform: "translate(1025.825 1010.335) rotate(180)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    d: "M0,4V0H4V1H1V4Z",
    transform: "translate(1037.824 1010.335) rotate(180)"
  }))), /*#__PURE__*/_react.default.createElement("span", {
    className: "zoomValue"
  }, (zoom * 100).toFixed(1), "%")), /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, {
    className: "highlight",
    onClick: function onClick() {
      return onZoomControl(true);
    }
  }))))));
};

var _default = ImageAnalysis;
exports.default = _default;