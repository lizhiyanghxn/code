"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = isPlainObject;
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _get = _interopRequireDefault(require("rc-util/es/utils/get"));

var _isNil = _interopRequireDefault(require("../isNil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var dateFormatterMap = {
  time: 'HH:mm:ss',
  timeRange: 'HH:mm:ss',
  date: 'YYYY-MM-DD',
  dateWeek: 'YYYY-wo',
  dateMonth: 'YYYY-MM',
  dateQuarter: 'YYYY-QQ',
  dateYear: 'YYYY',
  dateRange: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  dateTimeRange: 'YYYY-MM-DD HH:mm:ss'
};

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  if (isObject(o) === false) return false; // If has modified constructor

  var ctor = o.constructor;
  if (ctor === undefined) return true; // If has modified prototype

  var prot = ctor.prototype;
  if (isObject(prot) === false) return false; // If constructor does not have an Object-specific method

  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  } // Most likely a plain Object


  return true;
}

var convertMoment = function convertMoment(value, dateFormatter, valueType) {
  if (_moment.default.isMoment(value)) {
    if (dateFormatter === 'number') {
      return value.valueOf();
    }

    return value.format(dateFormatterMap[valueType] || 'YYYY-MM-DD HH:mm:ss');
  }

  return value;
};
/**
 * 根据不同的格式转化 moment
 *
 * @param value
 * @param dateFormatter
 * @param valueType
 */


var conversionMoment = function conversionMoment(value, dateFormatter, valueType) {
  if (!dateFormatter) {
    return value;
  }

  return convertMoment(value, dateFormatter, valueType);
};
/**
 * 这里主要是来转化一下数据 将 moment 转化为 string 将 all 默认删除
 *
 * @param value
 * @param dateFormatter
 * @param proColumnsMap
 */


var conversionSubmitValue = function conversionSubmitValue(value, dateFormatter, valueTypeMap, omitNil, parentKey) {
  var tmpValue = {}; // 如果 value 是 string 或者null，直接返回

  if (_typeof(value) !== 'object') {
    return value;
  }

  Object.keys(value).forEach(function (key) {
    var namePath = parentKey ? [parentKey, key].flat(1) : [key];
    var valueType = (0, _get.default)(valueTypeMap, namePath) || 'text';
    var itemValue = value[key];

    if ((0, _isNil.default)(itemValue) && omitNil) {
      return;
    } // 处理嵌套的情况


    if (isPlainObject(itemValue) && // 不是数组
    !Array.isArray(itemValue) && // 不是 moment
    !_moment.default.isMoment(itemValue)) {
      tmpValue[key] = conversionSubmitValue(itemValue, dateFormatter, valueTypeMap, omitNil, [key]);
      return;
    } // 处理 FormList 的 value


    if (Array.isArray(itemValue)) {
      tmpValue[key] = itemValue.map(function (arrayValue, index) {
        if (_moment.default.isMoment(arrayValue)) {
          return conversionMoment(arrayValue, dateFormatter, valueType);
        }

        return conversionSubmitValue(arrayValue, dateFormatter, valueTypeMap, omitNil, [key, "".concat(index)]);
      });
      return;
    }

    tmpValue[key] = conversionMoment(itemValue, dateFormatter, valueType);
  });
  return tmpValue;
};

var _default = conversionSubmitValue;
exports.default = _default;