"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;
exports.getSlotContent = exports.isFalsy = exports.notEmpty = exports.isFunc = exports.isObject = exports.isArray = void 0;

var isArray = function isArray(data) {
  return Object.prototype.toString.call(data) === '[object Array]';
};

exports.isArray = isArray;

var isObject = function isObject(data) {
  return Object.prototype.toString.call(data) === '[object Object]';
};

exports.isObject = isObject;

var isFunc = function isFunc(data) {
  return Object.prototype.toString.call(data) === '[object Function]';
};

exports.isFunc = isFunc;

var notEmpty = function notEmpty(value) {
  return value !== undefined && value !== null && value !== '';
};

exports.notEmpty = notEmpty;

var isFalsy = function isFalsy(value) {
  return value === 0 || value === '0' ? false : !value;
};

exports.isFalsy = isFalsy;

var getSlotContent = function getSlotContent(children, slotName) {
  if (!children) {
    return null;
  }

  if (isArray(children)) {
    return children.filter(function (item) {
      return item.props.slot === slotName;
    });
  }

  if (isObject(children)) {
    return children.props.slot === slotName ? children : null;
  }

  return null;
};
/**
 * 防抖函数，可以决定是开头调用还是末尾调用， 在指定的时间内，只会调用一次，如果在时间间隔内又 触发了函数，则重新计算时间
 *
 * @param {Function} callback
 * @param {Number} delay
 * @param {Boolean} [atBegin] 是否头部调用, 默认为 false
 * @returns {Function} A new, debounced function.
 */


exports.getSlotContent = getSlotContent;

function debounce(callback, delay) {
  var atBegin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (typeof callback !== 'function') {
    throw new Error('callback must be function.');
  }

  var lastExec = 0;
  var timeId = -1;
  var canceled = false;

  function clearExistingTimeout() {
    if (timeId >= 0) {
      clearTimeout(timeId);
    }
  }

  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var self = this;
    var intervalTime = Date.now() - lastExec;

    if (canceled) {
      return;
    }

    clearExistingTimeout();

    if (atBegin && intervalTime > delay) {
      exec();
      return;
    } // 使用 setTimeout 延迟执行函数


    timeId = setTimeout(exec, delay);

    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
  }

  wrapper.cancel = function cancel() {
    clearExistingTimeout();
    canceled = true;
  };

  return wrapper;
}