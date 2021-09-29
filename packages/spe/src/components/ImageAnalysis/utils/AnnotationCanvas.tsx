import { toolUtils } from '@sensetime/annotation';
import _ from 'lodash';
import React, { Component } from 'react';
import ImageManager from './preloadImg';
import { getAttributeColors, getToolColors } from './toolStyle';
import { drawPolygon, onMouseMove, setHoverID, advancedRender } from './myDrawUtil/myDrawUtils';

export { getLabels } from './common';

export const constant = {
  annotationColor: '#F2C261',
  trainColor: '#7ABECC',
};

export const formatInitResult = (
  resResult: string,
  fitlerFn = (result: any) => true,
  annotationColor = constant.annotationColor,
  trainColor = constant.trainColor,
) => {
  if (!resResult) return [];
  const localResult =
    typeof resResult === 'string' ? JSON.parse(resResult) : _.cloneDeep(resResult);
  const list1 =
    localResult?.pred_bbox?.map((result: number[], i: number) => ({
      type: 'training',
      tool: 'rect',
      id: `training-rect-${i}`,
      pointList: {
        x: result[0],
        y: result[1],
        width: result[2] - result[0],
        height: result[3] - result[1],
      },
      color: trainColor,
      labelIndex: i,
      attribute: `${localResult.pred_label?.[i] || ''} | ${(
        (result[result.length - 1] ?? 0) * 100
      ).toFixed(2)}%`,
      textAttribute: '',
    })) || [];
  const list2 =
    localResult?.gt_bbox?.map((result: number[], i: number) => ({
      type: 'annotation',
      tool: 'rect',
      id: `annotation-rect-${i}`,
      pointList: {
        x: result[0],
        y: result[1],
        width: result[2] - result[0],
        height: result[3] - result[1],
      },
      color: annotationColor,
      labelIndex: i,
      attribute: localResult?.gt_label?.[i] || '',
      textAttribute: '',
    })) || [];
  const list3 =
    localResult?.pred_det?.map((result: number[], i: number) => ({
      type: 'training',
      tool: 'polygon',
      id: `training-polygon-${i}`,
      pointList: Array.from({ length: Math.floor(result.length / 2) }, (v, i) => ({
        x: result[i * 2],
        y: result[i * 2 + 1],
      })),
      color: trainColor,
      labelIndex: i,
      attribute: '',
      textAttribute: localResult?.pred_text?.[i] || '',
    })) || [];
  const list4 =
    localResult?.gt_det?.map((result: number[], i: number) => ({
      type: 'annotation',
      tool: 'polygon',
      id: `annotation-polygon-${i}`,
      pointList: Array.from({ length: Math.floor(result.length / 2) }, (v, i) => ({
        x: result[i * 2],
        y: result[i * 2 + 1],
      })),
      color: annotationColor,
      labelIndex: i,
      attribute: '',
      textAttribute: localResult?.gt_text?.[i] || '',
    })) || [];
  const res = [...list1, ...list2, ...list3, ...list4];
  // 语义分割才有
  localResult?.gt_mask &&
    typeof localResult.gt_mask === 'string' &&
    res.unshift({
      type: 'annotation',
      tool: 'base64Mask',
      id: 'annotation-base64Mask',
      pointList: `data:image/png;base64,${localResult.gt_mask}`,
      color: '',
      labelIndex: 0,
      attribute: '',
      textAttribute: '',
    });
  // 实例分割才有
  localResult?.gt_mask &&
    Array.isArray(localResult.gt_mask) &&
    res.unshift(
      ...(localResult?.gt_mask?.map((result: number[], i: number) => ({
        type: 'annotation',
        tool: 'polygonMask',
        id: `annotation-polygonMask-${i}`,
        pointList: Array.from({ length: Math.floor(result?.length / 2) }, (v, i) => ({
          x: result?.[i * 2],
          y: result?.[i * 2 + 1],
        })),
        color: 'rgba(242, 194, 97, 0.6)',
        labelIndex: i,
        attribute: '',
        textAttribute: '',
      })) || []),
    );
  // 语义分割才有
  localResult?.pred_mask &&
    typeof localResult.pred_mask === 'string' &&
    res.unshift({
      type: 'training',
      tool: 'base64Mask',
      id: 'training-base64Mask',
      pointList: `data:image/png;base64,${localResult?.pred_mask}`,
      color: '',
      labelIndex: 0,
      attribute: '',
      textAttribute: '',
    });
  // 实例分割才有
  localResult?.pred_mask &&
    Array.isArray(localResult.pred_mask) &&
    res.unshift(
      ...(localResult?.pred_mask?.map((result: string, i: number) => ({
        type: 'training',
        tool: 'base64Mask',
        id: `training-base64Mask-${i}`,
        pointList: `data:image/png;base64,${result}`,
        color: '',
        labelIndex: i,
        attribute: '',
        textAttribute: '',
      })) || []),
    );
  return res.filter(fitlerFn);
};

const { getCurrentOperation } = toolUtils;
// const { EToolName } = cTool

class AnnotationCanvas extends Component<any> {
  canvasRef: React.RefObject<any>;
  toolInstance: any;
  constructor(props: any) {
    super(props);
    this.canvasRef = React.createRef();
    this.toolInstance = null;
  }

  componentDidMount() {
    const {
      toolName,
      canvasSize,
      swiperImages,
      currentIndex,
      initResultFilter = () => true,
      setZoom,
      setPos,
      setHoverLabel,
    } = this.props;
    const ToolOperation = getCurrentOperation(toolName);
    const toolInstance = new ToolOperation({
      container: this.canvasRef?.current,
      size: canvasSize ?? { width: 500, height: 500 },
      // config: this.props.config,
      style: this.getStyle(9),
    });
    console.log('toolName', toolName);
    toolInstance.base64MaskImageNode = {}; // 存储base64Msak的Node
    toolInstance.drawPolygon = drawPolygon.bind(toolInstance);
    toolInstance.onMouseMove = onMouseMove.bind(toolInstance);
    toolInstance.setHoverID = setHoverID.bind(toolInstance, setHoverLabel);
    toolInstance.render = advancedRender.bind(toolInstance, setZoom, setPos);
    this.toolInstance = toolInstance;
    toolInstance.init();
    this.drawOriginalImage();
    toolInstance?.setResult(
      formatInitResult(swiperImages?.list?.[currentIndex]?.text, initResultFilter),
    );
  }

  componentDidUpdate(preProps: any) {
    if (JSON.stringify(preProps.canvasSize) !== JSON.stringify(this.props.canvasSize)) {
      this.toolInstance.setSize(this.props.canvasSize);
    }
    if (preProps.currentIndex !== this.props.currentIndex) {
      this.drawOriginalImage();
    }
  }

  getStyle(opacity: number) {
    return {
      color: 1,
      width: 2,
      opacity: 9,
      toolColor: getToolColors(opacity),
      attributeColor: getAttributeColors(opacity),
    };
  }

  drawOriginalImage = async (currentIndex = this.props.currentIndex) => {
    const swiperImages = this.props.swiperImages;
    const imgNode = await ImageManager.getImageNode(swiperImages?.list, currentIndex);
    if (!imgNode) {
      this.toolInstance.setErrorImg();
      return;
    }
    this.toolInstance?.setImgNode(imgNode);
  };

  render() {
    return (
      <div style={{ position: 'relative' }} className="canvas-comp">
        <div
          ref={this.canvasRef}
          style={{
            width: this.props.canvasSize?.width ?? 500,
            height: this.props.canvasSize?.height ?? 500,
          }}
        />
      </div>
    );
  }
}

export default AnnotationCanvas;
