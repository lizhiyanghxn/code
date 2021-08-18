import React from 'react';
import { Button } from 'antd';
import { View } from '../../../index';

console.log('View', View);

const topEle = <>顶部内容</>;
const titleRight = <Button>右侧按钮</Button>;
const footerEle = <>copyright 2021</>;

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
    viewType="Details"
    topEle={topEle}
    footerEle={footerEle}
    pagingConfig={pagingConfig}
    headerRightEle={titleRight}
    routersList={[
      { title: '列表' },
      {
        title: '可点击项',
        click: () => {
          console.log('click item 2');
        },
      },
      { title: '详情', click: () => {} },
    ]}
    bodyNoScroll={true}
  >
    View Body Content
  </View>
);
