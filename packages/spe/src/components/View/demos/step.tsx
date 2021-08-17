import React from 'react';
import { Button } from 'antd';
import { View } from '../../../index';

const topEle = <>顶部内容</>;
const titleRight = <Button>右侧按钮</Button>;

const pagingConfig = {
  className: 'page-custom',
  current: 1,
  total: 50,
  defaultPageSize: 10,
  showSizeChanger: false,
  showQuickJumper: true,
  onChange: () => {},
};

export default () => (
  <View
    style={{
      height: '500px',
    }}
    viewType="Step"
    topEle={topEle}
    pagingConfig={pagingConfig}
    headerRightEle={titleRight}
    titleConfig={{
      routers: [{ name: '列表', path: '/', backType: 'replace' }, { name: '详情' }],
    }}
    titleAutoTrigger={true}
    bodyNoScroll
  >
    View Body Content
  </View>
);
