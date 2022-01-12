import React from 'react';
import { Form, Input, Button } from 'antd';
import { ListView } from '../../../index';

import './pageBox.scss';

export default () => {
  const headerRightEle = <Button>操作按钮</Button>;

  return (
    <ListView
      routers={[{ title: 'Title1' }, { title: 'Title2' }]}
      headerRightElement={headerRightEle}
      searchArea={
        <Form layout="inline" style={{ padding: '10px' }}>
          <Form.Item name="key">
            <Input />
          </Form.Item>
        </Form>
      }
      pagingConfig={{
        pageSize: 5,
        total: 43,
        showSizeChanger: false,
      }}
    >
      <div style={{ padding: '100px' }}>内容区域</div>
    </ListView>
  );
};
