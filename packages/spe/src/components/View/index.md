---
title: SPE - 页容器 View
group:
  path: /
nav:
  title: 组件
  path: /components
---

# View

View 封装了 SPE 页面级 layout，分 BasicView 和 DetailView 两种类型，BasicView 主要用于 spe 各主页面布局，DetailView 主要用于详情页布局

## 代码演示

```javascript
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
  const routersList = [{ title: '列表页' }];

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
```

### 列表页

<code src="./demos/list.tsx" iframe="500px" />

## 代码演示

```javascript
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
```

### 包含子列表的列表页

<code src="./demos/includeSublist.tsx" iframe="500px" />

## 代码演示

```javascript
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { DetailView } from '../../../index';

export default () => {
  const history = useHistory();

  const attrData = [
    {
      title: '模型简介',
      values: [
        { attr: '模型简介', value: '固特异' },
        { attr: '版本', value: 'v1.0' },
        {
          attr: (
            <>
              Accuracy <i className="iconfont iconrizhiguanli"></i>
            </>
          ),
          value: 'v1.0',
        },
      ],
    },
    {
      title: '训练配置',
      values: [
        { attr: '数据集', value: '大尺寸mb' },
        { attr: '算法配置', value: '小模型' },
        { attr: '停止规则', value: '按迭代轮次停止' },
      ],
    },
  ];

  const routersList = [
    { title: '模型管理', click: () => history.replace('/modelList') },
    {
      title: '模型详情',
      click: () => {
        console.log('click item 2');
      },
    },
  ];

  const headerRightEle = <Button>操作按钮</Button>;

  const rightCustomize = <div>rightCustomize here</div>;

  return (
    <DetailView
      style={{
        height: 500,
      }}
      attrData={attrData}
      routersList={routersList}
      headerRightEle={headerRightEle}
      rightCustomize={rightCustomize}
    />
  );
};
```

### 详情页

<code src="./demos/details.tsx" iframe="500px" />

## 代码演示

```javascript
import React from 'react';
import { Button, Table, Form, Input, Tabs } from 'antd';
import { BasicView } from '../../../index';
import CollapseTableDemo from '../../CollapseTable/demos/basic';

const { TabPane } = Tabs;

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
      viewType="TabList"
      bodyNoScroll
      routersList={routersList}
      toolEle={null}
      headerRightEle={<Button type="primary">操作区域</Button>}
      pagingConfig={null}
    >
      <Tabs defaultActiveKey="1" onChange={(activeKey) => console.log('tab activeKey', activeKey)}>
        <TabPane tab="Tab 1" key="1">
          <>
            <div style={{ margin: '24px' }}>{toolEle}</div>
            <Table columns={columns} dataSource={dataSource} pagination={false} />
          </>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <CollapseTableDemo />
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <div style={{ margin: '24px', textAlign: 'center' }}>you can put anything here</div>
        </TabPane>
      </Tabs>
    </BasicView>
  );
};
```

### Tabs 页面

<code src="./demos/tabs.tsx" iframe="500px" />

```javascript
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
```

### 多步骤页面

<code src="./demos/step.tsx" iframe="500px" />

## API

### BasicView

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| routersList | BasicView 类型组件顶部内容，顶部左侧内容复用了 spe 的 Breadcrumb 组件 | `{title: string,click: func}[]` | [] |
| viewType | BasicView 类型组件,具体参数看下方的表 | `string` | - |
| toolEle | BasicView 类型组件自定义内容区顶部 | `string 或 ReactNodes` | - |
| pagingConfig | BasicView 类型组件内部的 Pagination 组件需要的参数，接收 antd 的 Pagination 组件的 api | `object{}` | - |
| children | BasicView 类型组件自定义内容 | `string 或 ReactNodes` | - |
| headerRightEle | BasicView 类型组件自定义内容区顶部右侧内容 | `string 或 ReactNodes` | - |
| bodyNoScroll | BasicView 类型组件自定义内容区是否需要滚动条 | `boolean` | false |

### viewType (根据取值，来判断是否需要使用该组件内部的 Pagination 分页)

| 取值             | 说明       |
| ---------------- | ---------- |
| 'List'           | 常用列表   |
| 'IncludeSublist' | 包含子列表 |
| 'TabList'        | 切换列表   |
| 'Details'        | 详情页     |
| 'Step'           | 步骤页     |

### DetailView

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| attrData | DetailView 类型组件自定义内容区左侧的元素 | `{title: any; values: [{attr: any;value: any}]}[]` | - |
| rightCustomize | DetailView 类型组件自定义内容区右侧部的元素 | `ReactNode` | - |
