import React from 'react';
import classNames from 'classnames';
import { ConfigProvider, Tabs } from 'antd';
import BasicView from './BasicView';
import type { BasicViewPropsType } from './BasicView';
import useInheritGetPopupContainer from '../../utils/useInheritGetPopupContainer';

const { TabPane } = Tabs;

/*
 * TabView
 * 继承于 BasicView, 配置 tabsConfig, currentTab
 * 面包屑导航 + (Tab + 内容居中) + 页脚按钮
 * 使用场景：Tab页布局
 */

export type TabViewPropsType = BasicViewPropsType & {
  tabsConfig: Record<string, { tab: React.ReactNode; children: React.ReactNode }>;
  tabWrapConfig?: Record<string, any>;
  defaultTabKey?: string;
  className?: string;
};

const TabView: React.FC<TabViewPropsType> = (props) => {
  const { tabsConfig, tabWrapConfig = {}, defaultTabKey = '', className, ...rest } = props;

  const inheritGetPopupContainer = useInheritGetPopupContainer();

  const wrapperClassNames = classNames(`tab-view`, className);

  return (
    <BasicView {...rest} className={wrapperClassNames}>
      <Tabs defaultActiveKey={defaultTabKey} {...tabWrapConfig}>
        {Object.entries(tabsConfig).map((tabConfig) => {
          const [key, tabPane] = tabConfig;
          const { tab, children, ...paneConfig } = tabPane;
          return (
            <TabPane tab={tab} key={key} {...paneConfig}>
              <ConfigProvider
                getPopupContainer={(node) =>
                  (node && node.closest('.scroll-container')) ||
                  (node && node.closest('.content-view')) ||
                  inheritGetPopupContainer(node)
                }
              >
                {children}
              </ConfigProvider>
            </TabPane>
          );
        })}
      </Tabs>
    </BasicView>
  );
};

export default TabView;
