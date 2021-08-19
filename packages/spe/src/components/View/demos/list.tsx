import React from 'react';
import { Button, Table, Form, Input } from 'antd';
import { BasicView } from '../../../index';

const pagingConfig = {
  className: 'page-custom',
  current: 1,
  total: 50,
  defaultPageSize: 10,
  showSizeChanger: false,
  showQuickJumper: true,
  onChange: () => {},
};

export default () => {
  const routersList = [{ title: '用户列表' }];

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

  const toolEle = (
    <Form name="horizontal_login" layout="inline">
      <Form.Item name="username" initialValue="">
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" initialValue="">
        <Input type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button>查询</Button>
      </Form.Item>
    </Form>
  );

  return (
    <BasicView
      viewType="List"
      bodyNoScroll
      routersList={routersList}
      headerRightEle={<Button type="primary">操作区域</Button>}
      toolEle={toolEle}
      pagingConfig={pagingConfig}
    >
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </BasicView>
  );
};
