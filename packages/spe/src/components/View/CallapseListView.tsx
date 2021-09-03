import React from 'react';
import type { BasicViewPropsType } from './BasicView';
import BasicView from './BasicView';
import './DetailView.scss';

interface AttrSections {
  title: any;
  values: AttrItem[];
}

interface AttrItem {
  attr: any;
  value: any;
}

export type DetailViewPropsType = BasicViewPropsType & {
  attrData?: AttrSections[]; // 自定义内容区顶部的元素
  rightCustomize?: React.ReactElement; // 自定义底部元素
};

const DetailView: React.FC<DetailViewPropsType> = (props) => {
  const { attrData = [], rightCustomize, ...rest } = props;

  const getLeftPart = () =>
    attrData.map((attrSection: AttrSections, sectionIndex: number) => (
      <React.Fragment key={sectionIndex}>
        <div className="sub-text-title">
          <span>{attrSection.title}</span>
        </div>
        {attrSection.values.map((attrItem, index) => (
          <div className="sub-text-content-box line-height-2" key={index}>
            <div className="left-title">{attrItem.attr}</div>
            <div className="right-desc">{attrItem.value}</div>
          </div>
        ))}
      </React.Fragment>
    ));

  return (
    <BasicView viewType="Details" {...rest}>
      <div className={`detail-page-view`}>
        <div className="detail-content">
          <div className="detail-text-info">{getLeftPart()}</div>
          <div className="detail-chart-info">{rightCustomize}</div>
        </div>
      </div>
    </BasicView>
  );
};

export default DetailView;
