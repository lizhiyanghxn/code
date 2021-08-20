import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Divider } from 'antd';
import cs from 'classnames';
import {
  DoubleLeftOutlined,
  LeftOutlined,
  RightOutlined,
  DoubleRightOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import './Index.scss';

export default function ImageAnalyseModal(props) {
  const {
    images,
    initialIndex,
    setSwiperModalShow,
    className,
    RightInfoSlot,
    BottomControlSlot,
    TopTipsSlot,
  } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const skipOperation = (operator, skipIndex) => {
    let newIndex = currentIndex;
    // 跳转判断
    switch (operator) {
      case 'Backward':
        newIndex = currentIndex - 1;
        break;

      case 'Forward':
        newIndex = currentIndex + 1;
        break;
      case 'QuickBackward':
        newIndex = 0;
        break;

      case 'QuickForward':
        newIndex = images.length - 1;
        break;
      case 'JumpSkip':
        newIndex = parseInt(skipIndex - 1, 10);
        break;
      default:
        newIndex = currentIndex;
    }
    if (newIndex > images.length - 1 || newIndex < 0) {
      return;
    }
    setCurrentIndex(newIndex);
  };

  const PageInput = (props) => {
    const { jumpSkip, imgIndex } = props;
    const [newIndex, setIndex] = useState(imgIndex);
    const inputEl = useRef(null);

    useEffect(() => {
      setIndex(imgIndex + 1);
    }, [imgIndex]);

    const newHandleJump = (e) => {
      const reg = /^\d*$/;
      if (reg.test(e.target.value)) {
        setIndex(e.target.value);
      }
    };

    const newJumpSkip = (e) => {
      if (e.keyCode === 13) {
        jumpSkip(e.target.value);
        inputEl?.current?.blur();
      }
    };

    return (
      <Input
        className="pageInput"
        value={newIndex}
        ref={inputEl}
        onChange={newHandleJump}
        onKeyDown={newJumpSkip}
        onBlur={newJumpSkip}
      />
    );
  };

  return (
    <div className={cs(['image-analysis-modal', className])}>
      <Button
        className="close-modal-btn"
        ghost
        icon={<i className="iconfont iconclose" />}
        onClick={() => setSwiperModalShow(false)}
      />
      <div className="model-content">
        <div className="main-content">
          <div className="left-content">
            <div className="annotation-wrap">
              {TopTipsSlot && <TopTipsSlot className="top-tips" />}
              <div
                className="canvas-operate"
                style={{ backgroundImage: `url(${images[0].url})` }}
              />
            </div>
            <Button
              className="arrow left-arrow"
              ghost
              icon={<i className="iconfont iconfangxiangzuo" />}
              onClick={() => skipOperation('Backward')}
            />
            <Button
              className="arrow right-arrow"
              ghost
              icon={<i className="iconfont iconfangxiangyou" />}
              onClick={() => skipOperation('Forward')}
            />
          </div>
          {RightInfoSlot && <RightInfoSlot className="right-block" />}
        </div>
        <div className="foot-content">
          <div className="foot-content-right">
            {BottomControlSlot && <BottomControlSlot className="bottom-control" />}
            <div className="swiper-pagination">
              <DoubleLeftOutlined
                className="highlight"
                onClick={() => skipOperation('QuickBackward')}
              />
              <LeftOutlined className="highlight" onClick={() => skipOperation('Backward')} />
              <PageInput imgIndex={currentIndex} jumpSkip={(e) => skipOperation('JumpSkip', e)} />/
              <span className="pageAll">{100}</span>
              <RightOutlined className="highlight" onClick={() => skipOperation('Forward')} />
              <DoubleRightOutlined
                className="highlight"
                onClick={() => skipOperation('QuickForward')}
              />
            </div>
            <Divider
              type="vertical"
              style={{ background: 'rgba(153, 153, 153, 1)', height: '16px' }}
            />
            <div className="zoomController">
              <MinusOutlined className="highlight" onClick={() => {}} />
              <span className="zoomText">
                <svg viewBox="0 0 16 16" className="adaptIcon" onClick={() => {}}>
                  <g id="icon_adapt" transform="translate(-1021.825 -996)">
                    <rect fill="none" width="16" height="16" transform="translate(1021.825 996)" />
                    <rect
                      fill="#fff"
                      width="8"
                      height="7"
                      transform="translate(1025.825 1000.167)"
                    />
                    <path fill="#fff" d="M3,4V1H0V0H4V4Z" transform="translate(1033.825 997)" />
                    <path
                      fill="#fff"
                      d="M0,4V3H3V0H4V4Z"
                      transform="translate(1025.825 1001.001) rotate(180)"
                    />
                    <path
                      fill="#fff"
                      d="M3,4V1H0V0H4V4Z"
                      transform="translate(1025.825 1010.335) rotate(180)"
                    />
                    <path
                      fill="#fff"
                      d="M0,4V0H4V1H1V4Z"
                      transform="translate(1037.824 1010.335) rotate(180)"
                    />
                  </g>
                </svg>
                <span className="zoomValue">{(0.2 * 100).toFixed(1)}%</span>
              </span>
              <PlusOutlined className="highlight" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
