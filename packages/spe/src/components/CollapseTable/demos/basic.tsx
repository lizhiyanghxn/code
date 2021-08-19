import React from 'react';
import { CollapseTable } from '../../../index';

export default () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
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

  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  const rightExtra = (item: any) => {
    return <>当前用户年纪为 {item.age}</>;
  };

  const collapseHeader = (item: any) => {
    return <>当前用户为 {item.name}</>;
  };

  const onChangeCollapse = () => {
    console.log('onChangeCollapse click');
  };

  const getSubList = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const subList: any = {
          list: dataSource,
          total: 14,
        };
        return resolve(subList);
      }, 500);
    });
  };

  const giveFarDataSource = (dataSource, total) => {
    console.log('dataSource', dataSource);
    console.log('total', total);
  };

  return (
    <CollapseTable
      dataSource={dataSource} // 列表数据，非 Table 里层数据
      rightExtra={rightExtra} // 折叠面板右侧自定义div(按钮文字)
      columns={columns} // table的列
      collapseHeader={collapseHeader} // 折叠板的头部
      onChangeCollapse={onChangeCollapse}
      subPageApi={getSubList}
      subPageParams={(item: any) => [item.name]}
      giveFarDataSource={giveFarDataSource}
    />
  );
};
