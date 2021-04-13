"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

require("antd/es/form/style");

var _form = _interopRequireDefault(require("antd/es/form"));

var _react = _interopRequireWildcard(require("react"));

var _dcpProvider = require("@dcp-fe/dcp-provider");

var _dcpUtils = require("@dcp-fe/dcp-utils");

var _useParams = require("@umijs/use-params");

var _set = _interopRequireDefault(require("rc-util/es/utils/set"));

var _FieldContext = _interopRequireDefault(require("../FieldContext"));

var _Submitter = _interopRequireDefault(require("../components/Submitter"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var genParams = function genParams(syncUrl, params, type) {
  if (syncUrl === true) {
    return params;
  }

  return (0, _dcpUtils.runFunction)(syncUrl, params, type);
};

function BaseForm(props) {
  var children = props.children,
      contentRender = props.contentRender,
      submitter = props.submitter,
      fieldProps = props.fieldProps,
      formItemProps = props.formItemProps,
      groupProps = props.groupProps,
      _props$dateFormatter = props.dateFormatter,
      dateFormatter = _props$dateFormatter === void 0 ? 'string' : _props$dateFormatter,
      userForm = props.form,
      propsFormRef = props.formRef,
      onInit = props.onInit,
      syncToUrl = props.syncToUrl,
      _onReset = props.onReset,
      _props$omitNil = props.omitNil,
      omitNil = _props$omitNil === void 0 ? true : _props$omitNil,
      rest = _objectWithoutProperties(props, ["children", "contentRender", "submitter", "fieldProps", "formItemProps", "groupProps", "dateFormatter", "form", "formRef", "onInit", "syncToUrl", "onReset", "omitNil"]);

  var _Form$useForm = _form.default.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];
  /** 同步 url 上的参数 */


  var _useUrlSearchParams = (0, _useParams.useUrlSearchParams)({}),
      _useUrlSearchParams2 = _slicedToArray(_useUrlSearchParams, 2),
      urlSearch = _useUrlSearchParams2[0],
      setUrlSearch = _useUrlSearchParams2[1];

  var formRef = (0, _react.useRef)(userForm || form); // 初始化给一个默认的 form

  (0, _react.useImperativeHandle)(propsFormRef, function () {
    return formRef.current;
  }, []);
  var fieldsValueType = (0, _react.useRef)({});
  /** 保存 transformKeyRef，用于对表单key transform */

  var transformKeyRef = (0, _react.useRef)({});

  var _useMountMergeState = (0, _dcpUtils.useMountMergeState)(false),
      _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
      loading = _useMountMergeState2[0],
      setLoading = _useMountMergeState2[1];
  /** 因为 protable 里面的值无法保证刚开始就存在 所以多进行了一次触发，这样可以解决部分问题 */


  var _useMountMergeState3 = (0, _dcpUtils.useMountMergeState)(false),
      _useMountMergeState4 = _slicedToArray(_useMountMergeState3, 2),
      isUpdate = _useMountMergeState4[0],
      updateState = _useMountMergeState4[1];

  var items = _react.default.Children.toArray(children);

  var submitterProps = typeof submitter === 'boolean' || !submitter ? {} : submitter;

  var transformKey = function transformKey(values, omit) {
    return (0, _dcpUtils.transformKeySubmitValue)((0, _dcpUtils.conversionSubmitValue)(values, dateFormatter, fieldsValueType.current, omit), transformKeyRef.current);
  };
  /** 渲染提交按钮与重置按钮 */


  var submitterNode = submitter === false ? undefined : /*#__PURE__*/_react.default.createElement(_Submitter.default, _extends({
    key: "submitter"
  }, submitterProps, {
    onReset: function onReset() {
      var _submitterProps$onRes;

      var finalValues = transformKey(formRef.current.getFieldsValue(), omitNil);
      submitterProps === null || submitterProps === void 0 ? void 0 : (_submitterProps$onRes = submitterProps.onReset) === null || _submitterProps$onRes === void 0 ? void 0 : _submitterProps$onRes.call(submitterProps, finalValues);
      _onReset === null || _onReset === void 0 ? void 0 : _onReset(finalValues); // 如果 syncToUrl，清空一下数据

      if (syncToUrl) {
        setUrlSearch(transformKey(formRef.current.getFieldsValue(), false));
      }
    },
    form: userForm || form,
    submitButtonProps: _objectSpread({
      loading: loading
    }, submitterProps.submitButtonProps)
  }));
  var content = contentRender ? contentRender(items, submitterNode, formRef.current) : items;

  var forgetUpdate = function forgetUpdate() {
    setTimeout(function () {
      return updateState(true);
    });
  };

  (0, _react.useEffect)(function () {
    if (isUpdate) {
      setTimeout(function () {
        var finalValues = transformKey(formRef.current.getFieldsValue(), omitNil);
        onInit === null || onInit === void 0 ? void 0 : onInit(finalValues);
      }, 0);
    }
  }, [dateFormatter, isUpdate]); // 如果为 false，不需要触发设置进去

  var _useState = (0, _react.useState)(function () {
    if (!syncToUrl) {
      return {};
    }

    return genParams(syncToUrl, urlSearch, 'get');
  }),
      _useState2 = _slicedToArray(_useState, 1),
      urlParamsMergeInitialValues = _useState2[0];

  return (
    /*#__PURE__*/
    // 增加国际化的能力，与 table 组件可以统一
    _react.default.createElement(_dcpProvider.ConfigProviderWrap, null, /*#__PURE__*/_react.default.createElement(_FieldContext.default.Provider, {
      value: {
        fieldProps: fieldProps,
        formItemProps: formItemProps,
        groupProps: groupProps,
        setFieldValueType: function setFieldValueType(name, _ref) {
          var _ref$valueType = _ref.valueType,
              valueType = _ref$valueType === void 0 ? 'text' : _ref$valueType,
              transform = _ref.transform;

          if (Array.isArray(name)) {
            transformKeyRef.current = (0, _set.default)(transformKeyRef.current, name, transform);
            fieldsValueType.current = (0, _set.default)(fieldsValueType.current, name, valueType);
          }
        }
      }
    }, /*#__PURE__*/_react.default.createElement(_configProvider.default.SizeContext.Provider, {
      value: rest.size
    }, /*#__PURE__*/_react.default.createElement(_form.default, _extends({
      onKeyPress: function onKeyPress(event) {
        if (event.key === 'Enter') {
          var _formRef$current;

          (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.submit();
        }
      },
      form: userForm || form
    }, rest, {
      // 组合 urlSearch 和 initialValues
      initialValues: _objectSpread(_objectSpread({}, urlParamsMergeInitialValues), rest.initialValues),
      onFinish: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var finalValues, params;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (rest.onFinish) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                setLoading(true);
                _context.prev = 3;
                finalValues = transformKey(formRef.current.getFieldsValue(), omitNil);
                _context.next = 7;
                return rest.onFinish(finalValues);

              case 7:
                if (syncToUrl) {
                  // 把没有的值设置为未定义可以删掉 url 的参数
                  params = Object.keys(transformKey(formRef.current.getFieldsValue(), false)).reduce(function (pre, next) {
                    return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, next, finalValues[next] || undefined));
                  }, {});
                  /** 在同步到 url 上时对参数进行转化 */

                  setUrlSearch(genParams(syncToUrl, params, 'set'));
                }

                setLoading(false);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                // console.log(error);
                setLoading(false);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }))
    }), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      style: {
        display: 'none'
      }
    }), /*#__PURE__*/_react.default.createElement(_form.default.Item, {
      noStyle: true,
      shouldUpdate: true
    }, function (formInstance) {
      // 支持 fromRef，这里 ref 里面可以随时拿到最新的值
      if (propsFormRef && !isUpdate) forgetUpdate();
      if (propsFormRef) propsFormRef.current = formInstance;
      formRef.current = formInstance;
      return null;
    }), content))))
  );
}

var _default = BaseForm;
exports.default = _default;