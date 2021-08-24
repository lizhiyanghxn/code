import React, { useMemo, useRef } from 'react';
import cs from 'classnames';
import { Pagination } from 'antd';
import type { PaginationProps } from 'antd/lib/pagination';
import './BasicView.scss';
import Breadcrumb from '../Breadcrumb';
// import Tabs from '../Tabs';
import type { BreadcrumbPropsType } from '../Breadcrumb';
import type { TabsPropsType } from '../Tabs';

export type BasicViewPropsType = BreadcrumbPropsType &
  TabsPropsType & {
    viewType?: string; // List: 常用列表 / IncludeSublist: 包含子列表 / TabList: 切换列表 /  Details: 详情页 / Step: 步骤页
    toolEle?: any; // 自定义内容区顶部的元素
    pagingConfig?: null | PaginationProps; // 分页的原始配置
    headerRightEle?: React.ReactElement;
    bodyNoScroll?: boolean;
  };

/*
 * 功能：基础 layout view，衍生出详情页，列表页，手风琴列表页，tabs子页面，Step 步骤页
 */

const BasicView: React.FC<BasicViewPropsType> = (props) => {
  const {
    routersList,
    viewType,
    toolEle,
    pagingConfig,
    children,
    headerRightEle,
    bodyNoScroll,
    tabsConfig,
    ...rest
  } = props;

  const bsRef = useRef(null);

  const isList = useMemo(() => viewType === 'List', [viewType]);
  const isSubList = useMemo(() => viewType === 'IncludeSublist', [viewType]);
  const isTabList = useMemo(() => viewType === 'TabList', [viewType]);

  /** TabList 的 children 为函数 */
  const getPagination = pagingConfig?.total && (
    <Pagination className="page-custom" {...pagingConfig} />
  );

  const headerHasBottomBorder = isTabList;

  return (
    <div className="view-comp" {...rest}>
      <header className={cs({ 'no-border-bottom': headerHasBottomBorder }, 'view-header')}>
        <div className="view-base-title">
          <section className="view-header-left">
            <Breadcrumb routersList={routersList} />
          </section>
          <section className="view-header-right">{headerRightEle}</section>
        </div>
      </header>
      <main
        className={cs('view-main', {
          'view-is-list': isList || isSubList || isTabList,
          'is-sublist': isSubList,
        })}
        style={{ height: `calc(100% - 64px${isTabList ? ' - 40px' : ''})` }}
      >
        {toolEle && <section className="tool-section">{toolEle}</section>}
        <section className="body-section" ref={bsRef}>
          {isList || isSubList || isTabList ? (
            <div className={cs('body-section-list', { 'no-scroll': bodyNoScroll })}>
              {children}
              {isSubList && <div className="body-show-paging">{getPagination}</div>}
            </div>
          ) : (
            children
          )}
        </section>
        {isList || isTabList ? (
          <footer className={cs('view-footer ', { 'show-paging': isList || isTabList })}>
            {getPagination}
          </footer>
        ) : null}
      </main>
    </div>
  );
};

export default BasicView;
