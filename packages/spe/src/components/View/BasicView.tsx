import React from 'react';
import cs from 'classnames';
import { Spin } from 'antd';
import Breadcrumb from '../Breadcrumb';

/*
 * BasicView
 * 配置 routers, headerRightElement, footerActions(按钮数组)
 * 面包屑导航 + Content + 页脚按钮
 * 使用场景：基础布局，基础布局2
 */

export type BasicViewPropsType = {
  noHeader?: boolean; // 是否显示头部信息
  routers?: { title: React.ReactNode; click?: (...rest: any[]) => any }[]; // [{ title: '列表', click: fn }]
  headerRightElement?: React.ReactElement;
  footerActions?: React.ReactElement[];
  spinning?: boolean;
  className?: string;
};

const BasicView: React.FC<BasicViewPropsType> = (props) => {
  const {
    noHeader = false,
    routers,
    headerRightElement,
    footerActions = [],
    spinning = false,
    className = '',
    children,
    ...rest
  } = props;

  const renderHeader = () => (
    <header className="view-header">
      <div className="view-base-title">
        <section className="view-header-left">
          <Breadcrumb routersList={routers} />
        </section>
        <section className="view-header-right">{headerRightElement}</section>
      </div>
    </header>
  );

  const renderFooterAction = () => {
    if (footerActions.length > 0) {
      return (
        <div className="footer-actions">
          <div className="btn">
            {footerActions.map((item, i) => React.cloneElement(item, { key: i }))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`page-box ${className}`} {...rest}>
      <div className="basic-view">
        {!noHeader && renderHeader()}
        <section className={cs({ 'view-main-body': true, 'is-spinning': spinning })}>
          <Spin spinning={spinning} />
          {children}
        </section>
        {renderFooterAction()}
      </div>
    </div>
  );
};

export default BasicView;
