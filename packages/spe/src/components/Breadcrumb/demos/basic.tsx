import React from 'react';
import { Breadcrumb } from '../../../index';

export default () => (
  <Breadcrumb
    style={{
      margin: '24px 0',
      padding: '0 24px',
    }}
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
  />
);
