import React from 'react';
import { Breadcrumb } from '../../../index';

export default () => (
  <Breadcrumb
    style={{
      margin: '24px 0',
    }}
    titleConfig={{
      routers: [{ name: '列表', path: '/', backType: 'replace' }, { name: '详情' }],
    }}
    titleAutoTrigger={true}
  />
);
