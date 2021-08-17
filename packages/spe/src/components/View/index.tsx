import React, { useMemo, useRef } from 'react';
import cs from 'classnames';
import { Pagination } from 'antd';
import type { PaginationProps } from 'antd/lib/pagination';
import './index.scss';
import Breadcrumb from '../Breadcrumb';
import type { BreadcrumbPropsType } from '../Breadcrumb';

export type ViewPropsType = BreadcrumbPropsType & {
  viewType?: string; // List: 常用列表 / IncludeSublist: 包含子列表 /  Details: 详情页 / Step: 步骤页
  topEle?: React.ReactNode; // 自定义内容区顶部的元素
  footerEle?: React.ReactNode; // 自定义底部元素
  pagingConfig?: PaginationProps; // 分页的原始配置
  children?: React.ReactNode;
  headerRightEle?: React.ReactNode;
  bodyNoScroll?: boolean;
};

const View: React.FC<ViewPropsType> = (props) => {
  const {
    titleConfig = null,
    titleAutoTrigger = false,
    viewType = 'List',
    topEle = null,
    footerEle = null,
    pagingConfig = {},
    children,
    headerRightEle = null,
    bodyNoScroll = false,
    ...rest
  } = props;

  const bsRef = useRef(null);

  const isList = useMemo(() => viewType === 'List', [viewType]);
  const isSubList = useMemo(() => viewType === 'IncludeSublist', [viewType]);
  const isStep = useMemo(() => viewType === 'Step', [viewType]);

  const getPagination = pagingConfig?.total ? (
    <Pagination className="page-custom" {...pagingConfig} />
  ) : null;

  return (
    <div className="view-comp" {...rest}>
      <header className={cs({ 'no-border-bottom': isStep }, 'view-header')}>
        <section className="view-header-left">
          <Breadcrumb titleConfig={titleConfig} titleAutoTrigger={titleAutoTrigger} />
        </section>
        <section className="view-header-right">{headerRightEle}</section>
      </header>
      <main
        className={cs('view-main', {
          'view-is-list': isList || isSubList,
          'is-sublist': isSubList,
        })}
      >
        {topEle && <section className="top-section">{topEle}</section>}
        <section className="body-section" ref={bsRef}>
          {isList || isSubList ? (
            <div className={cs('body-section-list', { 'no-scroll': bodyNoScroll })}>
              {children}
              {isSubList && <div className="body-show-paging">{getPagination}</div>}
            </div>
          ) : (
            children
          )}
        </section>
        {footerEle || isList ? (
          <footer className={cs('view-footer', { 'show-paging': isList })}>
            {footerEle || getPagination}
          </footer>
        ) : null}
      </main>
    </div>
  );
};

export default View;
