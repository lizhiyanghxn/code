---
title: SPE - 手风琴表格组件
group:
  path: /
nav:
  title: 组件
  path: /components
---

## CollapseTable

CollapseTable 结合 antd 的 Collapse 和 Table 形成的手风琴 table 组件, 该组件内部有训练列表和模型管理的训练模型列表两个页面上的交互逻辑，后期如果遇到和这两个页面逻辑一样可以直接使用组件内部的逻辑（参考参数说明以及 spe 这两个页面的逻辑），也可以不使用内部逻辑(不传递 flag)。

### 代码演示

```javascript
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
    },
    {
      key: '2',
      name: '小明',
      age: 32,
      address: '北京',
    },
    {
      key: '3',
      name: '小李子',
      age: 33,
      address: '深圳',
    },
    {
      key: '4',
      name: '小郑',
      age: 34,
      address: '郑州',
    },
    {
      key: '5',
      name: '小武',
      age: 34,
      address: '武汉',
    },
    {
      key: '6',
      name: '小疆',
      age: 35,
      address: '新疆',
    },
  ];
  const [diffColumns, setDiffColumns] = useState([]);

  const rightExtra = (collapseItem) => {
    console.warn('collapseItem', collapseItem);
    return <>{collapseItem.rightContent}</>;
  };

  const collapseHeader = (collapseItem) => {
    console.warn('collapseItem', collapseItem);
    return <>{collapseItem.title}</>;
  };

  const panelClick = (collapseItem) => {
    console.warn('collapseItem', collapseItem);
    if (collapseItem.title === '手风琴面板1') {
      setDiffColumns(columns);
    } else {
      setDiffColumns(columns2);
    }
  };

  return (
    <CollapseTable
      columns={diffColumns}
      dataSource={dataSource}
      rightExtra={rightExtra}
      collapseHeader={collapseHeader}
      tableDataSource={tableDataSource}
      panelClick={panelClick}
      rowKey={(record) => record.key}
      pagination={{
        size: 'small',
        pageSize: 5,
        total: tableDataSource?.length || 0,
        showSizeChanger: false,
      }}
    />
  );
};
```

#### 基本使用

<code src="./demos/basic.tsx" iframe="500px"/>

### API

Breadcrumb

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 展开后的 table 所需要的 columns | array[] | [] |
| dataSource | Collapse 手风琴的数据 | array[] | [] |
| tableDataSource | 展开后的 table 所需要的数据 | array[] | [] |
| collapseHeader | 可选， 整个 Collapse 手风琴面板 div, collapseItem 是 dataSource 中对应的数据 | (collapseItem: any) => ReactNode | - |
| rightExtra | 可选， Collapse 手风琴面板右上角 div, collapseItem 是 dataSource 中对应的数据 | (collapseItem: any) => ReactNode | - |
| expandIconPosition | 可选， Collapse 手风琴面板展开合上 icon 位置 | string | left |
| panelClick | 可选， 整个 Collapse 手风琴面板的点击事件，collapseItem 是 dataSource 中对应的数据 | (collapseItem:any)=>{} | (collapseItem:any)=>{} |
| pagination | 可选， 同 antd 中 table 组件的 pagination | object{} | null |
| rowKey | 可选， 同 antd 中 table 组件的 rowKey | string 或者 function(record): string | id |
| tableParameter | 可选， 该组件中没有提到的 antd 中 table 的参数，都放到这里 | string 或者 function(record): string | id |
| flag | 可选， 组件内有训练列表和模型管理的训练模型列表两个页面上的交互逻辑，后期组件的复用根据交互，来区分是否需要复用组件内部逻辑（内部逻辑完全可以通过 panelClick 事件来代替），false 不复用，true 复用 | boolean | false |
| subPageApi | 子表格的获取数据的 api，条件：flag=true 复用 | () => void | () => {} |
| subPageParams | 子表格 api 调用时参数的处理，返回一个数组，条件：flag=true 复用 | () => any[] | () => any[] |
| subPageSize | 子表格一页条数，条件：flag=true 复用 | number | 5 |
| updateTable | 父组件回调，条件：flag=true 复用， | any，(obj) => void | null |
| giveFarDataSource | 给父组件传递 tableDataSource，条件：flag=true 复用 | (item: any, subPagingLength: any) => void | (item: any, subPagingLength: any) => void |