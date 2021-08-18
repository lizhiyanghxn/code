import React, { useMemo, useRef, useState } from 'react';
import cs from 'classnames';
import { Pagination } from 'antd';
import type { PaginationProps } from 'antd/lib/pagination';
import './index.scss';
import Breadcrumb from '../Breadcrumb';
import Tabs from '../Tabs';
import { isFunc } from '../../utils';
import type { BreadcrumbPropsType } from '../Breadcrumb';
import type { TabsPropsType } from '../Tabs';

export type ViewPropsType = BreadcrumbPropsType &
  TabsPropsType & {
    viewType?: string; // List: 常用列表 / IncludeSublist: 包含子列表 / TabList: 切换列表 /  Details: 详情页 / Step: 步骤页
    topEle?: React.ReactElement; // 自定义内容区顶部的元素
    footerEle?: React.ReactElement; // 自定义底部元素
    pagingConfig?: PaginationProps; // 分页的原始配置
    headerRightEle?: React.ReactElement;
    bodyNoScroll?: boolean;
  };

const View: React.FC<ViewPropsType> = (props) => {
  const {
    routersList,
    viewType,
    topEle,
    footerEle,
    pagingConfig,
    children,
    headerRightEle,
    bodyNoScroll,
    onTabChange = () => {},
    tabsConfig,
  } = props;

  const bsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(1);

  const isList = useMemo(() => viewType === 'List', [viewType]);
  const isSubList = useMemo(() => viewType === 'IncludeSublist', [viewType]);
  const isStep = useMemo(() => viewType === 'Step', [viewType]);
  const isTabList = useMemo(() => viewType === 'TabList', [viewType]);

  /** TabList 的 children 为函数 */

  const computedChildren = useMemo(() => {
    if (isTabList && isFunc(children)) {
      return children(activeTab);
    }
    return children;
  }, [activeTab, children]);

  const getPagination = pagingConfig?.total && (
    <Pagination className="page-custom" {...pagingConfig} />
  );

  return (
    <div className="view-comp">
      <header className={cs({ 'no-border-bottom': isStep }, 'view-header')}>
        <div className="view-base-title">
          <section className="view-header-left">
            <Breadcrumb routersList={routersList} />
          </section>
          <section className="view-header-right">{headerRightEle}</section>
        </div>
        {isTabList && (
          <div className="view-tab-switch">
            <Tabs
              defaultActive={activeTab}
              onTabChange={(index) => {
                setActiveTab(index);
                onTabChange(index);
              }}
              tabsConfig={tabsConfig}
            />
          </div>
        )}
      </header>
      <main
        className={cs('view-main', {
          'view-is-list': isList || isSubList || isTabList,
          'is-sublist': isSubList,
        })}
        style={{ height: `calc(100% - 64px${isTabList ? ' - 40px' : ''})` }}
      >
        <section className="top-section">{topEle}</section>
        <section className="body-section" ref={bsRef}>
          {isList || isSubList || isTabList ? (
            <div className={cs('body-section-list', { 'no-scroll': bodyNoScroll })}>
              {computedChildren &&
                React.cloneElement(computedChildren, {
                  furef: bsRef,
                })}
              {isSubList && <div className="body-show-paging">{getPagination}</div>}
            </div>
          ) : (
            computedChildren &&
            React.cloneElement(computedChildren, {
              furef: bsRef,
            })
          )}
        </section>
        {footerEle || isList || isTabList ? (
          <footer className={cs('view-footer ', { 'show-paging': isList || isTabList })}>
            {footerEle || getPagination}
          </footer>
        ) : null}
      </main>
    </div>
  );
};

export default View;
