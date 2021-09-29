"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawPolygon = drawPolygon;
exports.setHoverID = setHoverID;
exports.onMouseMove = onMouseMove;
exports.advancedRender = advancedRender;

var _lodash = _interopRequireDefault(require("lodash"));

var _annotation = require("@sensetime/annotation");

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function drawPolygon() {
  var _this = this;

  var polygonList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.resultList;

  var localPolygonList = _lodash.default.cloneDeep(polygonList);

  var ctx = this.canvas.getContext('2d');
  (0, _common.setArrBack)(localPolygonList, this.hoverID, 'id');
  localPolygonList === null || localPolygonList === void 0 ? void 0 : localPolygonList.forEach(function (polygon) {
    var thickness = _this.hoverID.includes(polygon.id) ? 4 : 2;

    if (polygon.tool === 'rect') {
      _annotation.DrawUtils.drawRect(_this.canvas, _annotation.AxisUtils.changeRectByZoom(polygon.pointList, _this.zoom, _this.currentPos), {
        color: polygon.color || 'blue',
        thickness: thickness
      });
    }

    if (polygon.tool === 'polygon') {
      _annotation.DrawUtils.drawPolygon(_this.canvas, _annotation.AxisUtils.changePointListByZoom(polygon.pointList, _this.zoom, _this.currentPos), {
        color: polygon.color || 'blue',
        lineType: 0,
        thickness: thickness,
        isClose: true
      });
    }

    if (polygon.tool === 'polygonMask') {
      _annotation.DrawUtils.drawPolygonWithFillAndLine(_this.canvas, _annotation.AxisUtils.changePointListByZoom(polygon.pointList, _this.zoom, _this.currentPos), {
        fillColor: polygon.color,
        strokeColor: polygon.color,
        // pointColor: 'white',
        thickness: _this.hoverID.includes(polygon.id) ? thickness : 0,
        lineCap: 'round',
        isClose: true,
        lineType: 0
      });
    }

    if (polygon.tool === 'base64Mask') {
      if (_this.base64MaskImageNode[polygon.id]) {
        _annotation.DrawUtils.drawImg(_this.canvas, _this.base64MaskImageNode[polygon.id], {
          zoom: _this.zoom,
          currentPos: _this.currentPos,
          rotate: _this.rotate,
          imgAttribute: _this._imgAttribute
        });
      } else {
        (0, _common.drawAlphaMask)(polygon.pointList).then(function (dataUrl) {
          var el = document.createElement('p');
          el.innerHTML = "<img src=\"".concat(dataUrl, "\" />");
          var image = el.firstChild;
          _this.base64MaskImageNode[polygon.id] = image;

          _this.render();
        });
      }
    }

    if (polygon.tool === 'rect' && polygon.attribute) {
      var fontConfig = 'normal normal 500 16px sans-serif';
      ctx.font = fontConfig;
      var measureTextWidth = ctx.measureText(polygon.attribute);

      if (_this.hoverID.includes(polygon.id)) {
        ctx.fillStyle = polygon.color;

        var rect = _annotation.AxisUtils.changeRectByZoom(polygon.pointList, _this.zoom, _this.currentPos);

        ctx.fillRect(rect.x - thickness / 2, rect.y - 30, Math.max(measureTextWidth.width * 1.4, 28), 32);
      }

      _annotation.DrawUtils.drawText(_this.canvas, _annotation.AxisUtils.changePointByZoom(polygon.pointList, _this.zoom, _this.currentPos), polygon.attribute, {
        color: _this.hoverID.includes(polygon.id) ? '#fff' : polygon.color,
        // 文字颜色
        font: fontConfig,
        offsetX: 5,
        offsetY: -10,
        textMaxWidth: 9999 // 还有其他配置可设置

      });
    }

    if (polygon.tool === 'polygon' && polygon.textAttribute) {
      var endPoint = _annotation.AxisUtils.changePointByZoom(polygon.pointList[polygon.pointList.length - 1], _this.zoom, _this.currentPos);

      var _fontConfig = 'normal normal 400 14px sans-serif';
      ctx.font = _fontConfig;

      var _measureTextWidth = ctx.measureText(polygon.textAttribute);

      if (_this.hoverID.includes(polygon.id)) {
        ctx.fillStyle = polygon.color;
        ctx.fillRect(endPoint.x - thickness / 2, endPoint.y, Math.max(_measureTextWidth.width * 1.4, 28), 24);
      }

      _annotation.DrawUtils.drawText(_this.canvas, {
        x: endPoint.x,
        y: endPoint.y + 26
      }, polygon.textAttribute, {
        color: _this.hoverID.includes(polygon.id) ? '#fff' : polygon.color,
        // 文字颜色
        font: _fontConfig,
        offsetX: 5,
        offsetY: -10,
        textMaxWidth: 9999 // 还有其他配置可设置

      });
    }
  });
}
/**
 * @param {Function} setHoverId
 * @param {String[]} hoverID
 */


function setHoverID() {
  var _this$resultList, _hoverResult$id;

  var setHoverLabel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (id) {};
  var hoverID = arguments.length > 1 ? arguments[1] : undefined;
  this.hoverID = hoverID;
  var hoverResult = (_this$resultList = this.resultList) === null || _this$resultList === void 0 ? void 0 : _this$resultList.find(function (result) {
    return result.id === hoverID[0];
  });
  setHoverLabel((_hoverResult$id = hoverResult === null || hoverResult === void 0 ? void 0 : hoverResult.id) !== null && _hoverResult$id !== void 0 ? _hoverResult$id : '');
  this.render();
}

function onMouseMove(e) {
  var _this$resultList2,
      _this$resultList2$fil,
      _this2 = this;

  if (!this.canvas || this.isImgError) {
    return true;
  }

  var coord = this.getCoordinate(e); // hover多边形

  var ZoomedResultList = (_this$resultList2 = this.resultList) === null || _this$resultList2 === void 0 ? void 0 : (_this$resultList2$fil = _this$resultList2.filter(function (result) {
    return ['rect', 'polygon'].includes(result.tool);
  })) === null || _this$resultList2$fil === void 0 ? void 0 : _this$resultList2$fil.map(function (result) {
    var pointList = result.pointList;

    if (result.tool === 'rect') {
      var _pointList = pointList,
          x = _pointList.x,
          y = _pointList.y,
          width = _pointList.width,
          height = _pointList.height;
      pointList = [{
        x: x,
        y: y
      }, {
        x: x + width,
        y: y
      }, {
        x: x + width,
        y: y + height
      }, {
        x: x,
        y: y + height
      }];
    }

    return _objectSpread(_objectSpread({}, result), {}, {
      pointList: _annotation.AxisUtils.changePointListByZoom(pointList, _this2.zoom, _this2.currentPos)
    });
  });
  var hoverResults = ZoomedResultList.filter(function (result) {
    return (0, _common.isPointInPolygon)(coord, result.pointList);
  });
  var hoverIds = hoverResults === null || hoverResults === void 0 ? void 0 : hoverResults.map(function (result) {
    return result.id;
  });
  var preHoverIds = this.mouseHoverIds || [];
  var newHoverId = hoverIds.find(function (id) {
    return !preHoverIds.includes(id);
  });
  this.hoverQueue = this.hoverQueue || [];

  if (newHoverId) {
    // 初次进入框内
    this.hoverQueue.unshift(newHoverId);
  } else if (!hoverIds || !hoverIds.length) {
    // 离开所有框
    this.hoverQueue = [];
  } else if (!hoverIds.includes(this.hoverID[0])) {
    // 离开框但仍在其他框内
    this.hoverQueue.shift();
  } else {// 在框内移动
  }

  this.setHoverID([this.hoverQueue[0]]);
  this.mouseHoverIds = hoverIds || []; // 是否展示十字光标

  if (this.isShowCursor) {
    this.coord = coord;
    this.render();
  }

  try {
    if (!coord || typeof (coord === null || coord === void 0 ? void 0 : coord.x) !== 'number' || typeof (coord === null || coord === void 0 ? void 0 : coord.y) !== 'number') {
      throw new Error('coord error');
    }

    this.coord = coord;

    if ((this.isSpaceClick || this.isDragStart) && this._firstClickCoordinate) {
      var currentPos = this.getCurrentPos(coord);
      this.currentPos = currentPos;
      this.isDrag = true;
      this.container.style.cursor = 'grabbing';
      this.forbidCursorLine = true;
      this.emit('dependRender');
    }

    this.render();
  } catch (error) {
    console.error(error);
  }
}

function advancedRender() {
  var setZoom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (zoom) {};
  var setPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (pos) {};

  if (!this.canvas || !this.ctx || !this.imgNode) {
    return;
  }

  this.clearCanvas();
  this.drawImg();
  this.drawPolygon();
  setZoom(this.zoom);
  setPos(this.currentPos);
}