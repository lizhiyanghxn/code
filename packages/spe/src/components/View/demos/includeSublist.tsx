import React from 'react';
import { Button, Form, Input } from 'antd';
import { BasicView } from '../../../index';
import CollapseTableDemo from '../../CollapseTable/demos/basic';

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
  const routersList = [{ title: '包含子列表的列表页' }];

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
      viewType="IncludeSublist"
      bodyNoScroll
      routersList={routersList}
      headerRightEle={<Button type="primary">操作区域</Button>}
      toolEle={toolEle}
      pagingConfig={pagingConfig}
    >
      <CollapseTableDemo />
    </BasicView>
  );
};
