import React, { useState, useEffect, useRef } from 'react';
import { Button, Spin, Input, Divider } from 'antd';
import cs from 'classnames';
import _ from 'lodash';
import { debounce } from '../../utils';
import {
  DoubleLeftOutlined,
  LeftOutlined,
  RightOutlined,
  DoubleRightOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import './index.scss';

const PageInput = (props: any) => {
  const { jumpSkip, imgIndex } = props;
  const [newIndex, setIndex] = useState(imgIndex);
  const inputEl = useRef<Input>(null);
  useEffect(() => {
    setIndex(imgIndex + 1);
  }, [imgIndex]);
  const newHandleJump = (e: any) => {
    const reg = /^\d*$/;
    if (reg.test(e.target.value)) {
      setIndex(e.target.value);
    }
  };
  const newJumpSkip = (e: any) => {
    if (e.keyCode === 13) {
      jumpSkip(e.target.value);
      if (inputEl?.current) {
        inputEl.current.blur();
      }
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

export type ImageAnalysisType = {
  className: string;
  total: number;
  currentIndex: number;
  searchParams: { page: number; page_size: number };
  loading?: boolean;
  canvasSlotRef: React.RefObject<any>;
  canvasSlotRef2?: React.RefObject<any>;
  setSwiperModalShow: (bool: boolean) => void;
  setClientSize: (size: { width: number; height: number }) => void;
  setCurrentIndex: (index: number) => void;
  getSwiperImages: (params: { page: number; page_size: number }) => Promise<any>;
  MainSlot: React.FC<any>;
  RightInfoSlot?: React.FC<any>;
  BottomControlSlot?: React.FC<any>;
  TopTipsSlot?: React.FC<any>;
};

const ImageAnalysis: React.FC<ImageAnalysisType> = (props) => {
  const {
    className,
    total = 0,
    currentIndex = 0,
    searchParams,
    loading = false,
    canvasSlotRef,
    canvasSlotRef2,
    setSwiperModalShow = () => {},
    setClientSize = () => {},
    setCurrentIndex = () => {},
    getSwiperImages,
    MainSlot,
    RightInfoSlot,
    BottomControlSlot,
    TopTipsSlot,
  } = props;

  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [zoom2, setZoom2] = useState(1);
  const [pos2, setPos2] = useState({ x: 0, y: 0 });
  const [hoverLabel, setHoverLabel] = useState('');
  const [localSearchParams, setLocalSearchParams] = useState<{ page: number; page_size: number }>(
    {} as any,
  );
  const cnavsWrapEl = useRef<HTMLDivElement>(null);
  const close1 = useRef(false);
  const close2 = useRef(false);

  const getClientSize = () => {
    if (cnavsWrapEl.current) {
      setClientSize({
        width: cnavsWrapEl.current.clientWidth,
        height: cnavsWrapEl.current.clientHeight,
      });
    }
  };

  useEffect(() => {
    if (cnavsWrapEl.current) {
      window.addEventListener('resize', getClientSize);
      setClientSize({
        width: cnavsWrapEl.current.clientWidth,
        height: cnavsWrapEl.current.clientHeight,
      });
    }
    return () => {
      window.removeEventListener('resize', getClientSize);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (searchParams) {
      setLocalSearchParams(_.cloneDeep(searchParams));
    }
  }, []);

  const setClose1False = debounce(() => {
    close1.current = false;
  }, 500);

  const setClose2False = debounce(() => {
    close2.current = false;
  }, 500);

  /** 两个canvas的坐标和缩放互相跟踪 利用防抖做开关，防止两个useEffect互相触发 */
  useEffect(() => {
    if (canvasSlotRef2?.current?.toolInstance?.imgNode && !close1.current) {
      close2.current = true;
      const { toolInstance } = canvasSlotRef2.current;
      toolInstance.innerZoom = zoom;
      toolInstance.zoom = zoom;
      toolInstance.currentPos = pos;
      toolInstance.currentPosStorage = pos;
      toolInstance.emit('renderZoom');
      toolInstance.emit('dependRender');
      toolInstance.render();
    }
    setClose2False();
  }, [zoom, pos]);

  useEffect(() => {
    if (canvasSlotRef?.current?.toolInstance?.imgNode && !close2.current) {
      close1.current = true;
      const { toolInstance } = canvasSlotRef.current;
      toolInstance.innerZoom = zoom2;
      toolInstance.zoom = zoom2;
      toolInstance.currentPos = pos2;
      toolInstance.currentPosStorage = pos2;
      toolInstance.emit('renderZoom');
      toolInstance.emit('dependRender');
      toolInstance.render();
    }
    setClose1False();
  }, [zoom2, pos2]);

  const skipOperation = async (operator: string, skipIndex = '') => {
    const skipNum = parseInt(skipIndex, 10);
    if (skipNum > total) {
      return;
    }
    let newIndex = currentIndex;
    // 跳转判断
    switch (operator) {
      case 'Backward': {
        if (currentIndex === 0 && localSearchParams.page === 1) {
          return;
        }
        if (currentIndex === 0) {
          await getSwiperImages({ ...localSearchParams, page: localSearchParams.page - 1 });
          setLocalSearchParams((params) => ({ ...params, page: params.page - 1 }));
          newIndex = localSearchParams.page_size - 1;
        } else {
          newIndex = currentIndex - 1;
        }
        break;
      }
      case 'Forward': {
        if (
          (localSearchParams.page - 1) * localSearchParams.page_size + currentIndex + 1 ===
          total
        ) {
          return;
        }
        if (currentIndex === localSearchParams.page_size - 1) {
          await getSwiperImages({ ...localSearchParams, page: localSearchParams.page + 1 });
          setLocalSearchParams((params) => ({ ...params, page: params.page + 1 }));
          newIndex = 0;
        } else {
          newIndex = currentIndex + 1;
        }
        break;
      }
      case 'QuickBackward': {
        if (localSearchParams.page !== 1) {
          await getSwiperImages({ ...localSearchParams, page: 1 });
          setLocalSearchParams((params) => ({ ...params, page: 1 }));
        }
        newIndex = 0;
        break;
      }
      case 'QuickForward': {
        const maxPage = Math.ceil(total / localSearchParams.page_size);
        if (localSearchParams.page !== maxPage) {
          await getSwiperImages({ ...localSearchParams, page: maxPage });
          setLocalSearchParams((params) => ({ ...params, page: maxPage }));
        }
        newIndex = (total - 1) % localSearchParams.page_size;
        break;
      }
      case 'JumpSkip': {
        const newPage = Math.ceil(skipNum / localSearchParams.page_size);
        if (localSearchParams.page !== newPage) {
          await getSwiperImages({ ...localSearchParams, page: newPage });
          setLocalSearchParams((params) => ({ ...params, page: newPage }));
        }
        newIndex = (skipNum - 1) % localSearchParams.page_size;
        break;
      }
      default:
        newIndex = currentIndex;
    }
    setCurrentIndex(newIndex);
  };

  const onInitialPosition = () => {
    if (canvasSlotRef.current) {
      const { toolInstance } = canvasSlotRef.current;
      toolInstance.initImgPos();
    }
    if (canvasSlotRef2?.current) {
      const { toolInstance } = canvasSlotRef2.current;
      toolInstance.initImgPos();
    }
  };

  const onZoomControl = (islarger = true) => {
    if (canvasSlotRef.current) {
      const { toolInstance } = canvasSlotRef.current;
      toolInstance.zoomChanged(islarger);
    }
    if (canvasSlotRef2?.current) {
      const { toolInstance } = canvasSlotRef2.current;
      toolInstance.zoomChanged(islarger);
    }
  };

  return (
    <div className={cs(['image-analysis-comp', className])}>
      <Button
        className="close-modal-btn"
        ghost
        icon={<i className="iconfont iconclose" />}
        onClick={() => setSwiperModalShow(false)}
      />
      <div className="model-content">
        {loading ? (
          <>
            <Spin />
            <div className="maintain" />
          </>
        ) : (
          <div className="main-content">
            <div className="left-content">
              <div className="annotation-wrap" ref={cnavsWrapEl}>
                {TopTipsSlot && <TopTipsSlot className="top-tips" />}
                {MainSlot && (
                  <MainSlot
                    setZoom={setZoom}
                    setPos={setPos}
                    setZoom2={setZoom2}
                    setPos2={setPos2}
                    setHoverLabel={setHoverLabel}
                    hoverLabel={hoverLabel}
                  />
                )}
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
            {RightInfoSlot && <RightInfoSlot className="right-block" hoverLabel={hoverLabel} />}
          </div>
        )}
        <div className="foot-content">
          <div className="foot-content-right">
            {BottomControlSlot && <BottomControlSlot className="bottom-control" />}
            <div className="swiper-pagination">
              <DoubleLeftOutlined
                className="highlight"
                onClick={() => skipOperation('QuickBackward')}
              />
              <LeftOutlined className="highlight" onClick={() => skipOperation('Backward')} />
              <PageInput
                imgIndex={
                  (localSearchParams?.page_size * (localSearchParams?.page - 1) || 0) + currentIndex
                }
                jumpSkip={(e: any) => skipOperation('JumpSkip', e)}
              />
              /<span className="pageAll">{total}</span>
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
              <MinusOutlined className="highlight" onClick={() => onZoomControl(false)} />
              <span className="zoomText" onClick={onInitialPosition}>
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
                <span className="zoomValue">{(zoom * 100).toFixed(1)}%</span>
              </span>
              <PlusOutlined className="highlight" onClick={() => onZoomControl(true)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAnalysis;
