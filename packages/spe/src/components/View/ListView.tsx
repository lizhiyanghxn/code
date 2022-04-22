import React, { useRef } from 'react';
import cs from 'classnames';
import { ConfigProvider, Pagination } from 'antd';
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
  pagingConfig?: any;
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

  const getFooter = () => (
    <footer className={cs({ 'view-footer': true, 'no-footer': !pagingConfig })}>
      {pagingConfig?.total ? (
        <Pagination
          className={cs({
            'page-custom': true,
            'no-quick-jumper': pagingConfig?.total <= pagingConfig?.pageSize,
          })}
          showSizeChanger
          showQuickJumper
          {...pagingConfig}
        />
      ) : null}
    </footer>
  );

  const getMainBody = () => (
    <>
      {getHeadExtraArea()}
      {getSearchArea()}
      <div className="scroll-container">
        <section
          className={cs({ 'body-section': true, 'scroll-in-table': fixPagination })}
          ref={bodySectionRef}
        >
          {getBodySection()}
        </section>
        {!fixPagination && getFooter()}
      </div>
      {fixPagination && getFooter()}
    </>
  );

  return (
    <BasicView {...rest} className={cs([rest.className, 'list-view'])}>
      <ConfigProvider
        getPopupContainer={() => document.querySelector('.scroll-container') || document.body}
      >
        {getMainBody()}
      </ConfigProvider>
    </BasicView>
  );
};

export default ListView;
