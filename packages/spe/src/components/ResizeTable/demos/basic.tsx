import React from 'react';
import ResizeTable from '../index';

export default () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      fixed: true,
      width: '100px',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      fixed: true,
      width: '100px',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '1000px',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      fixed: false,
      width: '300px',
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: '小王',
      age: 31,
      address: '上海',
      title: '第一行',
    },
    {
      key: '2',
      name: '小明',
      age: 32,
      address: '北京',
      title:
        '长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本',
    },
    {
      key: '3',
      name: '小李子',
      age: 33,
      address: '长文本长文本长文本长文本长文本长文本',
      title: '第三行',
    },
    {
      key: '4',
      name: '小郑',
      age: 34,
      address: '郑州',
      title: '第四行',
    },
    {
      key: '5',
      name: '小武',
      age: 34,
      address: '武汉',
      title: '第五行',
    },
    {
      key: '6',
      name: '小疆',
      age: 35,
      address: '新疆',
      title: '第六行',
    },
  ];

  return (
    <div style={{ height: '360px' }}>
      <ResizeTable
        usage="page"
        rowKey="key"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      ></ResizeTable>
    </div>
  );
};
