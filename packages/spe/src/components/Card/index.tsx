import React from 'react';
import type { HTMLAttributes } from 'react';
import cs from 'classnames';
import './index.scss';
import { getSlotContent } from '../../utils';

export type CardPropsType = HTMLAttributes<HTMLDivElement> & {
  titleText: any; // 主标题
  subTitleText?: any; // 副标题
  showHead?: boolean; // 是否展示头
  headClass?: string; // 头部样式class
  // className?: string; // 最外层 div 样式
};

const Card: React.FC<CardPropsType> = (props) => {
  const {
    children,
    className,
    titleText = '',
    subTitleText = '',
    showHead = true,
    headClass = 'head-style-1',
    ...rest
  } = props;
  return (
    <div className={cs('content-box-comp', className)} {...rest}>
      {showHead && (
        <div className={cs('head', headClass)}>
          <div className="head-left">
            {titleText ? (
              <div>
                {titleText} {subTitleText && <span className="sub-title-text">{subTitleText}</span>}
              </div>
            ) : (
              getSlotContent(children, 'headLeft')
            )}
          </div>
          <div className="head-right">{getSlotContent(children, 'headRight')}</div>
        </div>
      )}
      <div className="content">{getSlotContent(children, 'content')}</div>
    </div>
  );
};

export default Card;
