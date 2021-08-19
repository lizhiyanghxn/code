"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.getSlotContent = getSlotContent;