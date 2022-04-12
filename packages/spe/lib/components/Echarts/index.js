"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var echarts = _interopRequireWildcard(require("echarts"));

var _CommonTip = _interopRequireDefault(require("../CommonTip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var infographic = require('./infographic.project.json');

var Echarts = /*#__PURE__*/function (_Component) {
  _inherits(Echarts, _Component);

  var _super = _createSuper(Echarts);

  function Echarts(props) {
    var _this;

    _classCallCheck(this, Echarts);

    _this = _super.call(this, props);
    _this.instance = /*#__PURE__*/_react.default.createRef();

    _this.clearAndReset = function () {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (_this.state.chartInstance) {
        var _this$state, _this$state$chartInst;

        (_this$state = _this.state) === null || _this$state === void 0 ? void 0 : (_this$state$chartInst = _this$state.chartInstance) === null || _this$state$chartInst === void 0 ? void 0 : _this$state$chartInst.clear();
        setTimeout(function () {
          var _this$state2, _this$state2$chartIns;

          (_this$state2 = _this.state) === null || _this$state2 === void 0 ? void 0 : (_this$state2$chartIns = _this$state2.chartInstance) === null || _this$state2$chartIns === void 0 ? void 0 : _this$state2$chartIns.setOption(option);
        }, 100);
      }
    };

    _this.state = {
      chartInstance: null,
      option: {}
    };
    return _this;
  }

  _createClass(Echarts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        chartInstance: echarts.init(this.instance.current, infographic.theme)
      }, // eslint-disable-next-line func-names
      function () {
        this.state.chartInstance.setOption(this.props.option);
        this.props.setChartInstance(this.state.chartInstance);
        this.props.clear(this.clearAndReset);

        if (this.props.resize) {
          window.addEventListener('resize', this.state.chartInstance.resize);
        } // 图例点击事件


        if (this.props.onlegendselectchanged) {
          this.state.chartInstance.on('legendselectchanged', this.props.onlegendselectchanged);
        }
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.state.chartInstance && JSON.stringify(this.props.option.series) !== JSON.stringify(nextProps.option.series)) {
        this.clearAndReset(nextProps.option);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.resize) {
        var _this$state$chartInst2;

        window.removeEventListener('resize', (_this$state$chartInst2 = this.state.chartInstance) === null || _this$state$chartInst2 === void 0 ? void 0 : _this$state$chartInst2.resize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$tooltipCo = _this$props.tooltipConfig,
          tooltipConfig = _this$props$tooltipCo === void 0 ? null : _this$props$tooltipCo,
          className = _this$props.className;
      var tooltipStyle = {
        position: 'absolute',
        top: '0',
        zIndex: 99,
        left: tooltipConfig ? tooltipConfig.left : '80px'
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)(['echart-instance-wrap', className]),
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        ref: this.instance,
        style: {
          height: this.props.height,
          width: this.props.width,
          backgroundColor: '#fff'
        },
        className: "echart-instance"
      }), tooltipConfig ? /*#__PURE__*/_react.default.createElement("div", {
        className: "index-tooltip",
        style: tooltipStyle
      }, /*#__PURE__*/_react.default.createElement(_CommonTip.default, {
        text: tooltipConfig.msg,
        fontSize: 12,
        style: {
          paddingLeft: 0
        }
      })) : null);
    }
  }]);

  return Echarts;
}(_react.Component);

Echarts.propTypes = {
  height: _propTypes.default.string,
  width: _propTypes.default.string,
  option: _propTypes.default.object,
  resize: _propTypes.default.bool,
  onlegendselectchanged: _propTypes.default.func,
  setChartInstance: _propTypes.default.func,
  clear: _propTypes.default.func
};
Echarts.defaultProps = {
  height: '100%',
  width: '100%',
  option: {},
  resize: true,
  setChartInstance: function setChartInstance() {//
  },
  clear: function clear() {}
};
var _default = Echarts;
exports.default = _default;