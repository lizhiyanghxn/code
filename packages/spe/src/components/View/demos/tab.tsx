import React from 'react';
import { Button } from 'antd';
import { TabView } from '../index';

import './pageBox.scss';

export default () => {
  const headerRightEle = <Button>操作按钮</Button>;

  const tabsConfig = {
    k1: {
      tab: 'Tab1',
      children: <div style={{ padding: '60px' }}>内容区域1</div>,
    },
    k2: {
      tab: 'Tab2',
      children: <div style={{ padding: '60px' }}>内容区域2</div>,
    },
  };

  return (
    <TabView
      routers={[{ title: 'Title1' }, { title: 'Title2' }]}
      headerRightElement={headerRightEle}
      tabsConfig={tabsConfig}
      defaultTabKey="k2"
    >
      <div style={{ padding: '100px' }}>内容区域</div>
    </TabView>
  );
};
