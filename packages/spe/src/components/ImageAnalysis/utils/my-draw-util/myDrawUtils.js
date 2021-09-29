import _ from 'lodash';
import { DrawUtils, AxisUtils } from '@sensetime/annotation';
import { isPointInPolygon, drawAlphaMask, setArrBack } from '../common';

export function drawPolygon(polygonList = this.resultList) {
  const localPolygonList = _.cloneDeep(polygonList);
  const ctx = this.canvas.getContext('2d');
  setArrBack(localPolygonList, this.hoverID, 'id');
  localPolygonList?.forEach((polygon) => {
    const thickness = this.hoverID.includes(polygon.id) ? 4 : 2;

    if (polygon.tool === 'rect') {
      DrawUtils.drawRect(
        this.canvas,
        AxisUtils.changeRectByZoom(polygon.pointList, this.zoom, this.currentPos),
        {
          color: polygon.color || 'blue',
          thickness,
        },
      );
    }

    if (polygon.tool === 'polygon') {
      DrawUtils.drawPolygon(
        this.canvas,
        AxisUtils.changePointListByZoom(polygon.pointList, this.zoom, this.currentPos),
        {
          color: polygon.color || 'blue',
          lineType: 0,
          thickness,
          isClose: true,
        },
      );
    }

    if (polygon.tool === 'polygonMask') {
      DrawUtils.drawPolygonWithFillAndLine(
        this.canvas,
        AxisUtils.changePointListByZoom(polygon.pointList, this.zoom, this.currentPos),
        {
          fillColor: polygon.color,
          strokeColor: polygon.color,
          // pointColor: 'white',
          thickness: this.hoverID.includes(polygon.id) ? thickness : 0,
          lineCap: 'round',
          isClose: true,
          lineType: 0,
        },
      );
    }

    if (polygon.tool === 'base64Mask') {
      if (this.base64MaskImageNode[polygon.id]) {
        DrawUtils.drawImg(this.canvas, this.base64MaskImageNode[polygon.id], {
          zoom: this.zoom,
          currentPos: this.currentPos,
          rotate: this.rotate,
          imgAttribute: this._imgAttribute,
        });
      } else {
        drawAlphaMask(polygon.pointList).then((dataUrl) => {
          const el = document.createElement('p');
          el.innerHTML = `<img src="${dataUrl}" />`;
          const image = el.firstChild;
          this.base64MaskImageNode[polygon.id] = image;
          this.render();
        });
      }
    }

    if (polygon.tool === 'rect' && polygon.attribute) {
      const fontConfig = 'normal normal 500 16px sans-serif';
      ctx.font = fontConfig;
      const measureTextWidth = ctx.measureText(polygon.attribute);
      if (this.hoverID.includes(polygon.id)) {
        ctx.fillStyle = polygon.color;
        const rect = AxisUtils.changeRectByZoom(polygon.pointList, this.zoom, this.currentPos);
        ctx.fillRect(
          rect.x - thickness / 2,
          rect.y - 30,
          Math.max(measureTextWidth.width * 1.4, 28),
          32,
        );
      }
      DrawUtils.drawText(
        this.canvas,
        AxisUtils.changePointByZoom(polygon.pointList, this.zoom, this.currentPos),
        polygon.attribute,
        {
          color: this.hoverID.includes(polygon.id) ? '#fff' : polygon.color, // 文字颜色
          font: fontConfig,
          offsetX: 5,
          offsetY: -10,
          textMaxWidth: 9999,
          // 还有其他配置可设置
        },
      );
    }

    if (polygon.tool === 'polygon' && polygon.textAttribute) {
      const endPoint = AxisUtils.changePointByZoom(
        polygon.pointList[polygon.pointList.length - 1],
        this.zoom,
        this.currentPos,
      );
      const fontConfig = 'normal normal 400 14px sans-serif';
      ctx.font = fontConfig;
      const measureTextWidth = ctx.measureText(polygon.textAttribute);
      if (this.hoverID.includes(polygon.id)) {
        ctx.fillStyle = polygon.color;
        ctx.fillRect(
          endPoint.x - thickness / 2,
          endPoint.y,
          Math.max(measureTextWidth.width * 1.4, 28),
          24,
        );
      }
      DrawUtils.drawText(
        this.canvas,
        { x: endPoint.x, y: endPoint.y + 26 },
        polygon.textAttribute,
        {
          color: this.hoverID.includes(polygon.id) ? '#fff' : polygon.color, // 文字颜色
          font: fontConfig,
          offsetX: 5,
          offsetY: -10,
          textMaxWidth: 9999,
          // 还有其他配置可设置
        },
      );
    }
  });
}

/**
 * @param {Function} setHoverId
 * @param {String[]} hoverID
 */
export function setHoverID(setHoverLabel = (id) => {}, hoverID) {
  this.hoverID = hoverID;
  const hoverResult = this.resultList?.find((result) => result.id === hoverID[0]);
  setHoverLabel(hoverResult?.id ?? '');
  this.render();
}

export function onMouseMove(e) {
  if (!this.canvas || this.isImgError) {
    return true;
  }

  const coord = this.getCoordinate(e);

  // hover多边形
  const ZoomedResultList = this.resultList
    ?.filter((result) => ['rect', 'polygon'].includes(result.tool))
    ?.map((result) => {
      let pointList = result.pointList;
      if (result.tool === 'rect') {
        const { x, y, width, height } = pointList;
        pointList = [
          { x, y },
          { x: x + width, y },
          { x: x + width, y: y + height },
          { x, y: y + height },
        ];
      }
      return {
        ...result,
        pointList: AxisUtils.changePointListByZoom(pointList, this.zoom, this.currentPos),
      };
    });
  const hoverResults = ZoomedResultList.filter((result) =>
    isPointInPolygon(coord, result.pointList),
  );
  const hoverIds = hoverResults?.map((result) => result.id);
  const preHoverIds = this.mouseHoverIds || [];
  const newHoverId = hoverIds.find((id) => !preHoverIds.includes(id));
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
  } else {
    // 在框内移动
  }
  this.setHoverID([this.hoverQueue[0]]);
  this.mouseHoverIds = hoverIds || [];

  // 是否展示十字光标
  if (this.isShowCursor) {
    this.coord = coord;
    this.render();
  }

  try {
    if (!coord || typeof coord?.x !== 'number' || typeof coord?.y !== 'number') {
      throw new Error('coord error');
    }

    this.coord = coord;
    if ((this.isSpaceClick || this.isDragStart) && this._firstClickCoordinate) {
      const currentPos = this.getCurrentPos(coord);
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

export function advancedRender(setZoom = (zoom) => {}, setPos = (pos) => {}) {
  if (!this.canvas || !this.ctx || !this.imgNode) {
    return;
  }
  this.clearCanvas();
  this.drawImg();
  this.drawPolygon();
  setZoom(this.zoom);
  setPos(this.currentPos);
}
