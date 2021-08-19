import React from 'react';
import { Button, Form, Input } from 'antd';
import { BasicView, Steps } from '../../../index';

export default () => {
  const routersList = [{ title: '模型部署' }, { title: '创建部署任务' }];

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const toolEle = (
    <Form {...layout} name="nest-messages" style={{ width: '50%', margin: '48px auto' }}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
    </Form>
  );

  return (
    <BasicView
      style={{
        height: 500,
      }}
      viewType="Step"
      routersList={routersList}
      toolEle={null}
      pagingConfig={null}
      headerRightEle={<Button type="primary">操作区域</Button>}
      bodyNoScroll
    >
      <Steps
        currentStep={2}
        stepsConfig={['第一步', '第二步', '第三步']}
        usage="page"
        isCenter={false}
      />
      {toolEle}
    </BasicView>
  );
};
