"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ImageAnalyseModal;

require("antd/es/divider/style");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("@ant-design/icons");

require("./Index.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ImageAnalyseModal(props) {
  var images = props.images,
      initialIndex = props.initialIndex,
      setSwiperModalShow = props.setSwiperModalShow,
      className = props.className,
      RightInfoSlot = props.RightInfoSlot,
      BottomControlSlot = props.BottomControlSlot,
      TopTipsSlot = props.TopTipsSlot;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  (0, _react.useEffect)(function () {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  var skipOperation = function skipOperation(operator, skipIndex) {
    var newIndex = currentIndex; // 跳转判断

    switch (operator) {
      case 'Backward':
        newIndex = currentIndex - 1;
        break;

      case 'Forward':
        newIndex = currentIndex + 1;
        break;

      case 'QuickBackward':
        newIndex = 0;
        break;

      case 'QuickForward':
        newIndex = images.length - 1;
        break;

      case 'JumpSkip':
        newIndex = parseInt(skipIndex - 1, 10);
        break;

      default:
        newIndex = currentIndex;
    }

    if (newIndex > images.length - 1 || newIndex < 0) {
      return;
    }

    setCurrentIndex(newIndex);
  };

  var PageInput = function PageInput(props) {
    var jumpSkip = props.jumpSkip,
        imgIndex = props.imgIndex;

    var _useState3 = (0, _react.useState)(imgIndex),
        _useState4 = _slicedToArray(_useState3, 2),
        newIndex = _useState4[0],
        setIndex = _useState4[1];

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
        var _inputEl$current;

        jumpSkip(e.target.value);
        inputEl === null || inputEl === void 0 ? void 0 : (_inputEl$current = inputEl.current) === null || _inputEl$current === void 0 ? void 0 : _inputEl$current.blur();
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

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(['image-analysis-modal', className])
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
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "main-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "left-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "annotation-wrap"
  }, TopTipsSlot && /*#__PURE__*/_react.default.createElement(TopTipsSlot, {
    className: "top-tips"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "canvas-operate",
    style: {
      backgroundImage: "url(".concat(images[0].url, ")")
    }
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
    className: "right-block"
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
    imgIndex: currentIndex,
    jumpSkip: function jumpSkip(e) {
      return skipOperation('JumpSkip', e);
    }
  }), "/", /*#__PURE__*/_react.default.createElement("span", {
    className: "pageAll"
  }, 100), /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, {
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
    onClick: function onClick() {}
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "zoomText"
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
  }, (0.2 * 100).toFixed(1), "%")), /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, {
    className: "highlight",
    onClick: function onClick() {}
  }))))));
}