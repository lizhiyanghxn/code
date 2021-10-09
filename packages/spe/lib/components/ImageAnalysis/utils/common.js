"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swapArr = swapArr;
exports.setArrBack = setArrBack;
exports.isPointInPolygon = isPointInPolygon;
exports.getLabels = getLabels;
exports.drawAlphaMask = drawAlphaMask;
exports.jsonParser = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _colorPalette = _interopRequireDefault(require("./tool-style/colorPalette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var jsonParser = function jsonParser(content) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  try {
    if (typeof content === 'string') {
      return JSON.parse(content);
    }

    return content || defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

exports.jsonParser = jsonParser;

function swapArr(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
/** Arr1中将存在于arr2的元素换到末尾 */


function setArrBack() {
  var arr1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var arr2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var valKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var index = 0;

  for (var i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i]) && !arr2.includes(arr1[i][valKey])) {
      swapArr(arr1, i, index);
      index++;
    }
  }
} // export const withinRange = (value, range) => {
//   const min = Math.min(...range)
//   const max = Math.max(...range)
//   if (value > max) {
//     return max
//   }
//   if (value < min) {
//     return min
//   }
//   return value
// }

/**
 * 射线法判断点是否在多边形内部
 *
 * @param {Object} p 待判断的点，格式：{ x: X坐标, y: Y坐标 }或者"170 21"
 * @param {Array} poly 多边形顶点，数组成员的格式同p[]
 * @returns {Boolean} 点 p 和多边形 poly 的几何关系
 */


function isPointInPolygon(p, poly) {
  if (typeof p === 'string') {
    p = {
      x: p.split(' ')[0],
      y: p.split(' ')[1]
    };
  }

  var px = p.x;
  var py = p.y;
  var flag = false;

  for (var i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
    if (typeof poly[i] === 'string') {
      poly[i] = {
        x: poly[i].split(' ')[0],
        y: poly[i].split(' ')[1]
      };
    }

    var sx = poly[i].x;
    var sy = poly[i].y;
    var tx = poly[j].x;
    var ty = poly[j].y; // 点与多边形顶点重合

    if (sx === px && sy === py || tx === px && ty === py) {
      return true;
    } // 判断线段两端点是否在射线两侧


    if (sy < py && ty >= py || sy >= py && ty < py) {
      // 线段上与射线 Y 坐标相同的点的 X 坐标
      var x = sx + (py - sy) * (tx - sx) / (ty - sy); // 点在多边形的边上

      if (x === px) {
        return true;
      } // 射线穿过多边形的边界


      if (x > px) {
        flag = !flag;
      }
    }
  } // 射线穿过多边形边界的次数为奇数时点在多边形内


  return flag;
}
/** Base64图片计算标签 */


function getLabels(modelTagsList, base64) {
  return new Promise(function (resolve) {
    var canvas = document.createElement('canvas');
    var image = new Image();
    var result = [];

    image.onload = function () {
      var _uniqeKeys$map;

      canvas.width = image.width;
      canvas.height = image.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      for (var i = 0; i < imgData.length; i++) {
        if ((i + 1) % 4 !== 0) {
          result.push(imgData[i]);
        }
      }

      var uniqeKeys = _toConsumableArray(new Set(result));

      var classList = uniqeKeys === null || uniqeKeys === void 0 ? void 0 : (_uniqeKeys$map = uniqeKeys.map(function (key) {
        return modelTagsList[key];
      })) === null || _uniqeKeys$map === void 0 ? void 0 : _uniqeKeys$map.filter(function (item) {
        return !!item;
      });
      resolve(classList);
    };

    image.src = "data:image/png;base64,".concat(base64);
  });
}
/** Mask图加颜色和透明度 */


function drawAlphaMask(dataUrl) {
  return new Promise(function (resolve) {
    var image = new Image();
    var canvas = document.createElement('canvas');

    image.onload = function () {
      canvas.width = image.width;
      canvas.height = image.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, image.width, image.height);
      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < imgData.data.length; i += 4) {
        var val = imgData.data[i];
        var rgbColor = _colorPalette.default[val] || [val, val, val];
        imgData.data[i] = rgbColor[0];
        imgData.data[i + 1] = rgbColor[1];
        imgData.data[i + 2] = rgbColor[2];
        imgData.data[i + 3] = 70;
      }

      ctx.putImageData(imgData, 0, 0); // 将获取的图片数据放回去。

      resolve(canvas.toDataURL());
    };

    image.src = dataUrl;
  });
}