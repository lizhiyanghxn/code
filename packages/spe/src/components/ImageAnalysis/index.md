---
title: 图片分析组件 ImageAnalyseModal
order: 2
group:
  title: 基础业务组件
  path: /components
nav:
  path: /spe
  title: SPE 组件
---

## ImageAnalysis

spe 图片分析组件，整理了基于 canvas 的图片展示及各种标注信息分析的基础能力。该组件使用较为灵活，这里给出一个完整的 demo，可以参考使用。

## 代码演示

```javascript
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Divider, Switch } from 'antd';
import cs from 'classnames';
import _ from 'lodash';
import ImageAnalysis from '../index';
import AnnotationCanvas, { constant, formatInitResult } from '../utils/AnnotationCanvas';
import './basic.scss';

import features from './mock/mockData';
const swiperImages = _.cloneDeep(features);

export default function DetectionImageAnalysis(props: any) {
  const canvasSlotRef = useRef < any > null;
  const [clientSize, setClientSize] = useState({ width: 500, height: 500 });
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(true);

  const [swiperModalShow, setSwiperModalShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSwitch1(true);
    setSwitch2(true);
  }, [currentIndex]);

  useEffect(() => {
    if (canvasSlotRef.current) {
      const { toolInstance } = canvasSlotRef.current;
      const allResultList = formatInitResult(swiperImages?.list?.[currentIndex]?.text);
      const resultList1 = allResultList.filter((item) => item.type === 'annotation');
      const resultList2 = allResultList.filter((item) => item.type === 'training');
      let resultList = [];
      if (switch1 && switch2) {
        resultList = allResultList;
      } else if (switch1 && !switch2) {
        resultList = resultList1;
      } else if (!switch1 && switch2) {
        resultList = resultList2;
      } else {
        resultList = [];
      }
      toolInstance.setResult(resultList);
    }
  }, [switch1, switch2]);

  const onTagHover = (enter = false, index: number, type: string) => {
    const { toolInstance } = canvasSlotRef.current;
    const resultList = formatInitResult(
      swiperImages?.list?.[currentIndex]?.text,
      (result) => result.type === type && result.labelIndex === index,
    );
    let hoverIds = [];
    if (enter) {
      hoverIds = resultList?.map((item) => item.id);
    }
    toolInstance.setHoverID(hoverIds);
  };

  const RightInfoSlot = useCallback(
    ({ className, hoverLabel }) => {
      const resText = swiperImages?.list?.[currentIndex]?.text;
      const resTextObj = JSON.parse(resText);
      return (
        <div className={cs([className, 'sec-right-Info'])}>
          <h2>{resTextObj?.filename}</h2>
          <h3>训练结果</h3>
          <div>mAP: {(resTextObj?.bbox_mAP || 0) * 100}</div>
          <h3 className="label-title">属性标签</h3>
          {switch1 && (
            <>
              <h4 className="annotaotion-title">
                <div className="dot" style={{ backgroundColor: constant.annotationColor }} />
                标注结果
              </h4>
              {resTextObj?.gt_label &&
                Array.isArray(resTextObj.gt_label) &&
                resTextObj.gt_label.map((label: string, index: number) => (
                  <div
                    className={cs({
                      tag: true,
                      'hovered-tag': hoverLabel === `annotation-rect-${index}`,
                    })}
                    key={label + index}
                    onFocus={() => 0}
                    onMouseMove={() => onTagHover(true, index, 'annotation')}
                    onMouseLeave={() => onTagHover(false, index, 'annotation')}
                  >
                    {label}
                  </div>
                ))}
            </>
          )}
          {switch2 && (
            <>
              <h4 className="training-title">
                <div className="dot" style={{ backgroundColor: constant.trainColor }} />
                训练结果
              </h4>
              {resTextObj?.pred_label &&
                Array.isArray(resTextObj.pred_label) &&
                resTextObj.pred_label.map((label: string, index: number) => (
                  <div
                    className={cs({
                      tag: true,
                      'hovered-tag': hoverLabel === `training-rect-${index}`,
                    })}
                    key={label + index}
                    onFocus={() => 0}
                    onMouseMove={() => onTagHover(true, index, 'training')}
                    onMouseLeave={() => onTagHover(false, index, 'training')}
                  >
                    {label}
                  </div>
                ))}
            </>
          )}
        </div>
      );
    },
    [swiperImages, currentIndex, switch1, switch2],
  );

  const BottomControlSlot = ({ className }: any) => (
    <div className={cs([className, 'sec-control-block'])}>
      <div className="switch-item">
        <div className="label">
          <span className="label-color" style={{ backgroundColor: constant.annotationColor }} />
          标注结果
        </div>
        <Switch checked={switch1} onChange={setSwitch1} />
      </div>
      <div className="switch-item">
        <div className="label">
          <span className="label-color" style={{ backgroundColor: constant.trainColor }} />
          训练结果
        </div>
        <Switch checked={switch2} onChange={setSwitch2} />
      </div>
      <Divider type="vertical" style={{ background: 'rgba(153, 153, 153, 1)', height: '16px' }} />
    </div>
  );

  const Mainslot = useCallback(
    (props) => (
      <AnnotationCanvas
        ref={canvasSlotRef}
        toolName="check"
        swiperImages={swiperImages}
        currentIndex={currentIndex}
        canvasSize={clientSize}
        setHoverLabel={props.setHoverLabel}
        setZoom={props.setZoom}
      />
    ),
    [swiperImages, currentIndex, clientSize],
  );

  const onImageClick = (index: number) => {
    setCurrentIndex(index);
    setSwiperModalShow(true);
  };

  return (
    <div className="image-list-wrap">
      {features?.list?.map((item: any, index: number) => (
        <div className="image-item" key={item.url + index}>
          <div
            className="image-background"
            style={{ backgroundImage: `url(${item.url})` }}
            onClick={() => onImageClick(index)}
          />
        </div>
      ))}
      {swiperModalShow && (
        <ImageAnalysis
          className="scene-image-analysis-comp"
          total={swiperImages?.total}
          currentIndex={currentIndex}
          searchParams={{ page: 1, page_size: 20 }}
          loading={false}
          canvasSlotRef={canvasSlotRef}
          setCurrentIndex={setCurrentIndex}
          setClientSize={setClientSize}
          setSwiperModalShow={setSwiperModalShow}
          getSwiperImages={() => Promise.resolve()}
          MainSlot={swiperImages && Mainslot}
          RightInfoSlot={RightInfoSlot}
          BottomControlSlot={BottomControlSlot}
        />
      )}
    </div>
  );
}
```

### 基础用法

<code src="./demos/basic.tsx" background="#f0f2f5" />

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| total | 图片总条数 | `number` | 0 |
| currentIndex | 图片在当前分页内的序号（从 0 开始） | `number` | 0 |
| searchParams | 查询图片列表 Api 的分页参数 | `{page: number, page_size: number}` | null |
| loading | 弹框中 loading 状态 | `boolean` | false |
| canvasSlotRef | AnnotationCanvas 的 ref | `React.RefObject` | null |
| canvasSlotRef2 | AnnotationCanvas 的 ref | `React.RefObject` | null |
| setSwiperModalShow | 控制弹框展示 | `(bool: boolean) => void` | () => {} |
| setClientSize | 返回 mainSlot 占据的大小 | `(size: {width: number, height: number}) => void` | () => {} |
| setCurrentIndex | 返回当前 currentIndex | `(num: number) => void` | () => {} |
| getSwiperImages | 查询图片列表 Api, 只传入分页参数，path 参数请预先传入 | `(params: SearchParams) => Promise<any>` | null |
| MainSlot | 主要内容（一般是 cnavas 区域） | `React.FC` | null |
| RightInfoSlot | 右侧区域 | `React.FC` | null |
| BottomControlSlot | 底部区域（分页区域的左侧） | `React.FC` | null |
| TopTipsSlot | 顶部居中悬浮标题 | `React.FC` | null |