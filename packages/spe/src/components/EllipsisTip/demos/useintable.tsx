import React from 'react';
import { Table } from 'antd';
import EllipsisTip from '../index';

export default () => (
  <Table
    dataSource={[
      {
        label: 'Table中使用',
        demo: '这个一段超长的文本1，column需要设置`ellipsis: { showTitle: false }`，超长的文本2。',
        address: '中国广东深圳南山',
      },
      { label: 'Table中使用', demo: '这个不超出', address: '中国广东深圳南山' },
    ]}
    columns={[
      {
        title: 'label',
        dataIndex: 'label',
        key: 'label',
      },
      {
        title: (
          <EllipsisTip
            isParentEllipsis
            title="title也可以设置，title也可以设置，title也可以设置，title也可以设置，title也可以设置，title也可以设置。"
            placement="bottomLeft"
          />
        ),
        dataIndex: 'demo',
        key: 'demo',
        width: '300px',
        ellipsis: { showTitle: false },
        render: (demo) => <EllipsisTip isParentEllipsis title={demo} placement="topLeft" />,
      },
      {
        title: 'address',
        dataIndex: 'address',
        key: 'address',
      },
    ]}
    pagination={false}
  />
);
