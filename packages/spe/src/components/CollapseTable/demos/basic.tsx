import React, { useState } from 'react';
import { CollapseTable } from '../../../index';

export default () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const columns2 = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
  ];

  const dataSource = [
    {
      title: '手风琴面板1',
      rightContent: '手风琴面板1右侧内容',
    },
    {
      title: '手风琴面板2',
      rightContent: '手风琴面板2右侧内容',
    },
    {
      title: '手风琴面板3',
      rightContent: '手风琴面板3右侧内容',
    },
  ];
  const tableDataSource = [
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
      title: '第二行',
    },
    {
      key: '3',
      name: '小李子',
      age: 33,
      address: '深圳',
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
  const [diffColumns, setDiffColumns] = useState([]);
  const rightExtra = (item: any) => {
    console.warn('item', item);
    return <>{item.rightContent}</>;
  };

  const collapseHeader = (item: any) => {
    console.warn('item', item);
    return <>{item.title}</>;
  };

  const panelClick = (item: any) => {
    console.warn('item', item);
    if (item.title === '手风琴面板1') {
      setDiffColumns(columns);
    } else {
      setDiffColumns(columns2);
    }
  };

  return (
    <CollapseTable
      columns={diffColumns} // table的列
      dataSource={dataSource} // 列表数据，非 Table 里层数据
      rightExtra={rightExtra} // 折叠面板右侧自定义div(按钮文字)
      collapseHeader={collapseHeader} // 折叠板的头部
      tableDataSource={tableDataSource} // table的数据
      panelClick={panelClick} // 折叠Panel面板的点击事件，例如：通过该点击事件给父组件传递参数，解决不知道是不是第一次展开，Panel展开后columns不同问题等
      rowKey={(record: any) => record.key}
      pagination={{
        size: 'small',
        pageSize: 5,
        total: tableDataSource?.length || 0,
        showSizeChanger: false,
      }}
    />
  );
};
