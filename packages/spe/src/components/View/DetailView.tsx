import React from 'react';
import BasicView from './BasicView';
import cs from 'classnames';
import type { BasicViewPropsType } from './BasicView';

/*
 * DetailView
 * 继承于 BasicView, 配置 leftAttrData，rightPart, children(页面弹框一类)
 * 面包屑导航 + 左右布局
 * 使用场景：详情页布局
 */

export type DetailViewPropsType = BasicViewPropsType & {
  leftAttrData: {
    title: React.ReactNode;
    values: { attr: React.ReactNode; value: React.ReactNode }[];
  }[];
  rightPart: React.ReactElement;
  className?: string;
};

const DetailView: React.FC<DetailViewPropsType> = (props) => {
  const { leftAttrData = [], rightPart, children, ...rest } = props;

  const getLeftPart = () =>
    leftAttrData.map((attrSection: any, sectionIndex) => (
      <React.Fragment key={sectionIndex}>
        <div className="sub-text-title">
          <span>{attrSection.title}</span>
        </div>
        {attrSection.values.map((attrItem: any, index: number) => (
          <div className="sub-text-content-box line-height-2" key={index}>
            <div className="left-title">{attrItem.attr}</div>
            <div className="right-desc">{attrItem.value}</div>
          </div>
        ))}
      </React.Fragment>
    ));

  return (
    <BasicView {...rest} className={cs([rest.className, 'detail-view'])}>
      <div className="detail-content">
        <div className="detail-text-info">{getLeftPart()}</div>
        <div className="detail-chart-info">{rightPart}</div>
        {children}
      </div>
    </BasicView>
  );
};

export default DetailView;
