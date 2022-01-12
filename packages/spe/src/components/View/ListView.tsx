import React, { useRef } from 'react';
import cs from 'classnames';
import { Pagination } from 'antd';
import BasicView from './BasicView';
import type { BasicViewPropsType } from './BasicView';

/*
 * ListView
 * 继承于 BasicView, 配置 headExtra, searchArea, pagingConfig, fixPagination
 * 面包屑导航 + (HeaderExtra + form区域 + ResizeTable/CollapseTable + 页签)
 * 使用场景：Table 列表布局(页签固定)，Table 子列表布局
 */

export type ListViewPropsType = BasicViewPropsType & {
  headExtra?: React.ReactNode;
  searchArea?: React.ReactElement;
  pagingConfig: any;
  fixPagination?: boolean;
  children: React.ReactElement;
  className?: string;
};

const ListView: React.FC<ListViewPropsType> = (props) => {
  const { headExtra, searchArea, pagingConfig, children, fixPagination = true, ...rest } = props;

  const bodySectionRef = useRef(null);

  const getHeadExtraArea = () => {
    if (headExtra) {
      return headExtra;
    }
    return null;
  };

  const getSearchArea = () => {
    if (searchArea) {
      return searchArea;
    }
    return null;
  };

  const getBodySection = () => {
    const childrenWithRef = React.Children.map(children, (item: React.ReactElement) =>
      React.cloneElement(item, { furef: bodySectionRef }),
    );
    return <div className="body-section-list">{childrenWithRef}</div>;
  };

  const getMainBody = () => (
    <>
      {getHeadExtraArea()}
      {getSearchArea()}
      <section
        className={cs('body-section', {
          'set-height': fixPagination,
          'set-height-nosearch': !searchArea,
        })}
        ref={bodySectionRef}
      >
        {getBodySection()}
      </section>
      <footer className="view-footer">
        {pagingConfig?.total ? <Pagination className="page-custom" {...pagingConfig} /> : null}
      </footer>
    </>
  );

  return (
    <BasicView {...rest} className={cs([rest.className, 'list-view'])}>
      {getMainBody()}
    </BasicView>
  );
};

export default ListView;
