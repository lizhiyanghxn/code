"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getLabels", {
  enumerable: true,
  get: function get() {
    return _common.getLabels;
  }
});
exports.default = exports.formatInitResult = exports.constant = void 0;

var _annotation = require("@sensetime/annotation");

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _preloadImg = _interopRequireDefault(require("./preloadImg"));

var _myDrawUtils = require("./my-draw-util/myDrawUtils");

var _common = require("./common");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var constant = {
  annotationColor: '#F2C261',
  trainColor: '#7ABECC'
};
exports.constant = constant;

var formatInitResult = function formatInitResult(resResult) {
  var _localResult$pred_bbo, _localResult$gt_bbox, _localResult$pred_det, _localResult$gt_det, _localResult$gt_mask, _localResult$pred_mas;

  var fitlerFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (result) {
    return true;
  };
  var annotationColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : constant.annotationColor;
  var trainColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : constant.trainColor;
  if (!resResult) return [];
  var localResult = typeof resResult === 'string' ? JSON.parse(resResult) : _lodash.default.cloneDeep(resResult);
  var list1 = (localResult === null || localResult === void 0 ? void 0 : (_localResult$pred_bbo = localResult.pred_bbox) === null || _localResult$pred_bbo === void 0 ? void 0 : _localResult$pred_bbo.map(function (result, i) {
    var _localResult$pred_lab, _result;

    return {
      type: 'training',
      tool: 'rect',
      id: "training-rect-".concat(i),
      pointList: {
        x: result[0],
        y: result[1],
        width: result[2] - result[0],
        height: result[3] - result[1]
      },
      color: trainColor,
      labelIndex: i,
      attribute: "".concat(((_localResult$pred_lab = localResult.pred_label) === null || _localResult$pred_lab === void 0 ? void 0 : _localResult$pred_lab[i]) || '', " | ").concat((((_result = result[result.length - 1]) !== null && _result !== void 0 ? _result : 0) * 100).toFixed(2), "%"),
      textAttribute: ''
    };
  })) || [];
  var list2 = (localResult === null || localResult === void 0 ? void 0 : (_localResult$gt_bbox = localResult.gt_bbox) === null || _localResult$gt_bbox === void 0 ? void 0 : _localResult$gt_bbox.map(function (result, i) {
    var _localResult$gt_label;

    return {
      type: 'annotation',
      tool: 'rect',
      id: "annotation-rect-".concat(i),
      pointList: {
        x: result[0],
        y: result[1],
        width: result[2] - result[0],
        height: result[3] - result[1]
      },
      color: annotationColor,
      labelIndex: i,
      attribute: (localResult === null || localResult === void 0 ? void 0 : (_localResult$gt_label = localResult.gt_label) === null || _localResult$gt_label === void 0 ? void 0 : _localResult$gt_label[i]) || '',
      textAttribute: ''
    };
  })) || [];
  var list3 = (localResult === null || localResult === void 0 ? void 0 : (_localResult$pred_det = localResult.pred_det) === null || _localResult$pred_det === void 0 ? void 0 : _localResult$pred_det.map(function (result, i) {
    var _localResult$pred_tex;

    return {
      type: 'training',
      tool: 'polygon',
      id: "training-polygon-".concat(i),
      pointList: Array.from({
        length: Math.floor(result.length / 2)
      }, function (v, i) {
        return {
          x: result[i * 2],
          y: result[i * 2 + 1]
        };
      }),
      color: trainColor,
      labelIndex: i,
      attribute: '',
      textAttribute: (localResult === null || localResult === void 0 ? void 0 : (_localResult$pred_tex = localResult.pred_text) === null || _localResult$pred_tex === void 0 ? void 0 : _localResult$pred_tex[i]) || ''
    };
  })) || [];
  var list4 = (localResult === null || localResult === void 0 ? void 0 : (_localResult$gt_det = localResult.gt_det) === null || _localResult$gt_det === void 0 ? void 0 : _localResult$gt_det.map(function (result, i) {
    var _localResult$gt_text;

    return {
      type: 'annotation',
      tool: 'polygon',
      id: "annotation-polygon-".concat(i),
      pointList: Array.from({
        length: Math.floor(result.length / 2)
      }, function (v, i) {
        return {
          x: result[i * 2],
          y: result[i * 2 + 1]
        };
      }),
      color: annotationColor,
      labelIndex: i,
      attribute: '',
      textAttribute: (localResult === null || localResult === void 0 ? void 0 : (_localResult$gt_text = localResult.gt_text) === null || _localResult$gt_text === void 0 ? void 0 : _localResult$gt_text[i]) || ''
    };
  })) || [];
  var res = [].concat(_toConsumableArray(list1), _toConsumableArray(list2), _toConsumableArray(list3), _toConsumableArray(list4)); // 语义分割才有

  (localResult === null || localResult === void 0 ? void 0 : localResult.gt_mask) && typeof localResult.gt_mask === 'string' && res.unshift({
    type: 'annotation',
    tool: 'base64Mask',
    id: 'annotation-base64Mask',
    pointList: "data:image/png;base64,".concat(localResult.gt_mask),
    color: '',
    labelIndex: 0,
    attribute: '',
    textAttribute: ''
  }); // 实例分割才有

  (localResult === null || localResult === void 0 ? void 0 : localResult.gt_mask) && Array.isArray(localResult.gt_mask) && res.unshift.apply(res, _toConsumableArray((localResult === null || localResult === void 0 ? void 0 : (_localResult$gt_mask = localResult.gt_mask) === null || _localResult$gt_mask === void 0 ? void 0 : _localResult$gt_mask.map(function (result, i) {
    return {
      type: 'annotation',
      tool: 'polygonMask',
      id: "annotation-polygonMask-".concat(i),
      pointList: Array.from({
        length: Math.floor((result === null || result === void 0 ? void 0 : result.length) / 2)
      }, function (v, i) {
        return {
          x: result === null || result === void 0 ? void 0 : result[i * 2],
          y: result === null || result === void 0 ? void 0 : result[i * 2 + 1]
        };
      }),
      color: 'rgba(242, 194, 97, 0.6)',
      labelIndex: i,
      attribute: '',
      textAttribute: ''
    };
  })) || [])); // 语义分割才有

  (localResult === null || localResult === void 0 ? void 0 : localResult.pred_mask) && typeof localResult.pred_mask === 'string' && res.unshift({
    type: 'training',
    tool: 'base64Mask',
    id: 'training-base64Mask',
    pointList: "data:image/png;base64,".concat(localResult === null || localResult === void 0 ? void 0 : localResult.pred_mask),
    color: '',
    labelIndex: 0,
    attribute: '',
    textAttribute: ''
  }); // 实例分割才有

  (localResult === null || localResult === void 0 ? void 0 : localResult.pred_mask) && Array.isArray(localResult.pred_mask) && res.unshift.apply(res, _toConsumableArray((localResult === null || localResult === void 0 ? void 0 : (_localResult$pred_mas = localResult.pred_mask) === null || _localResult$pred_mas === void 0 ? void 0 : _localResult$pred_mas.map(function (result, i) {
    return {
      type: 'training',
      tool: 'base64Mask',
      id: "training-base64Mask-".concat(i),
      pointList: "data:image/png;base64,".concat(result),
      color: '',
      labelIndex: i,
      attribute: '',
      textAttribute: ''
    };
  })) || []));
  return res.filter(fitlerFn);
};

exports.formatInitResult = formatInitResult;
var getCurrentOperation = _annotation.toolUtils.getCurrentOperation; // const { EToolName } = cTool

var AnnotationCanvas = /*#__PURE__*/function (_Component) {
  _inherits(AnnotationCanvas, _Component);

  var _super = _createSuper(AnnotationCanvas);

  function AnnotationCanvas(props) {
    var _this;

    _classCallCheck(this, AnnotationCanvas);

    _this = _super.call(this, props);
    _this.drawOriginalImage = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this$toolInstance;

      var currentIndex,
          swiperImages,
          imgNode,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              currentIndex = _args.length > 0 && _args[0] !== undefined ? _args[0] : _this.props.currentIndex;
              swiperImages = _this.props.swiperImages;
              _context.next = 4;
              return _preloadImg.default.getImageNode(swiperImages === null || swiperImages === void 0 ? void 0 : swiperImages.list, currentIndex);

            case 4:
              imgNode = _context.sent;

              if (imgNode) {
                _context.next = 8;
                break;
              }

              _this.toolInstance.setErrorImg();

              return _context.abrupt("return");

            case 8:
              (_this$toolInstance = _this.toolInstance) === null || _this$toolInstance === void 0 ? void 0 : _this$toolInstance.setImgNode(imgNode);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    _this.canvasRef = /*#__PURE__*/_react.default.createRef();
    _this.toolInstance = null;
    return _this;
  }

  _createClass(AnnotationCanvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$canvasRef, _swiperImages$list, _swiperImages$list$cu;

      var _this$props = this.props,
          toolName = _this$props.toolName,
          canvasSize = _this$props.canvasSize,
          swiperImages = _this$props.swiperImages,
          currentIndex = _this$props.currentIndex,
          _this$props$initResul = _this$props.initResultFilter,
          initResultFilter = _this$props$initResul === void 0 ? function () {
        return true;
      } : _this$props$initResul,
          setZoom = _this$props.setZoom,
          setPos = _this$props.setPos,
          setHoverLabel = _this$props.setHoverLabel;
      var ToolOperation = getCurrentOperation(toolName);
      var toolInstance = new ToolOperation({
        container: (_this$canvasRef = this.canvasRef) === null || _this$canvasRef === void 0 ? void 0 : _this$canvasRef.current,
        size: canvasSize !== null && canvasSize !== void 0 ? canvasSize : {
          width: 500,
          height: 500
        }
      });
      toolInstance.base64MaskImageNode = {}; // 存储base64Msak的Node

      toolInstance.drawPolygon = _myDrawUtils.drawPolygon.bind(toolInstance);
      toolInstance.onMouseMove = _myDrawUtils.onMouseMove.bind(toolInstance);
      toolInstance.setHoverID = _myDrawUtils.setHoverID.bind(toolInstance, setHoverLabel);
      toolInstance.render = _myDrawUtils.advancedRender.bind(toolInstance, setZoom, setPos);
      this.toolInstance = toolInstance;
      toolInstance.init();
      this.drawOriginalImage();
      toolInstance === null || toolInstance === void 0 ? void 0 : toolInstance.setResult(formatInitResult(swiperImages === null || swiperImages === void 0 ? void 0 : (_swiperImages$list = swiperImages.list) === null || _swiperImages$list === void 0 ? void 0 : (_swiperImages$list$cu = _swiperImages$list[currentIndex]) === null || _swiperImages$list$cu === void 0 ? void 0 : _swiperImages$list$cu.text, initResultFilter));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(preProps) {
      if (JSON.stringify(preProps.canvasSize) !== JSON.stringify(this.props.canvasSize)) {
        this.toolInstance.setSize(this.props.canvasSize);
      }

      if (preProps.currentIndex !== this.props.currentIndex) {
        this.drawOriginalImage();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$canvasSiz, _this$props$canvasSiz2, _this$props$canvasSiz3, _this$props$canvasSiz4;

      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          position: 'relative'
        },
        className: "canvas-comp"
      }, /*#__PURE__*/_react.default.createElement("div", {
        ref: this.canvasRef,
        style: {
          width: (_this$props$canvasSiz = (_this$props$canvasSiz2 = this.props.canvasSize) === null || _this$props$canvasSiz2 === void 0 ? void 0 : _this$props$canvasSiz2.width) !== null && _this$props$canvasSiz !== void 0 ? _this$props$canvasSiz : 500,
          height: (_this$props$canvasSiz3 = (_this$props$canvasSiz4 = this.props.canvasSize) === null || _this$props$canvasSiz4 === void 0 ? void 0 : _this$props$canvasSiz4.height) !== null && _this$props$canvasSiz3 !== void 0 ? _this$props$canvasSiz3 : 500
        }
      }));
    }
  }]);

  return AnnotationCanvas;
}(_react.Component);

var _default = AnnotationCanvas;
exports.default = _default;