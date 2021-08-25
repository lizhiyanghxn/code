---
title: SPE - 日志组件
order: 1
group:
  path: /
nav:
  title: 组件
  path: /components
---

# Logger

spe 统一的日志展示组件,该组件字段名称、整体样式较为固定，使用前先和 spe 已经存在的日志组件进行交互和视觉对比。

## 代码演示

```javascript
import React, { useState } from 'react';
import { Button } from 'antd';
import Logger from '../index';

export default () => {
  const [visible, setVisible] = useState(false);

  const logs = [
    { date: '2021-07-14 16:05:59', message: '日志正文' },
    { date: '2021-07-14 16:05:59', message: '日志第二行' },
  ];
  const logTabs = [
    {
      title: '数据格式转换',
      key: 'tabKey1',
      active: false,
      processList: [
        { label: '类型1', value: 'type' },
        { label: '类型2', value: 'type2' },
      ],
      processId: 'type',
      logs,
      emptyMsg: '',
      showLoading: true,
    },
    {
      title: '测试',
      key: 'tabKey2',
      active: true,
      processList: [
        { label: '测试类型1', value: 'testType' },
        { label: '测试类型2', value: 'testType2' },
      ],
      processId: 'testType2',
      logs,
      emptyMsg: '',
      showLoading: false,
    },
  ];
  const onRefresh = (tabPaneKey: string, selectValue: string) => {
    console.warn('tab的key', tabPaneKey, '下拉框的value', selectValue);
  };
  const onDownload = () => {
    console.warn('这是下载事件');
  };

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(!visible)}>
        展开日志
      </Button>
      <Logger
        logTabs={logTabs}
        show={visible}
        width={600}
        title={'这里是日志组件弹框标题'}
        showDownLoad={true}
        downLoadText={'下载按钮文字'}
        showRefresh={true}
        onLoadMore={() => {}}
        onClose={() => setVisible(false)}
        onDownload={onDownload}
        onRefresh={onRefresh}
      />
    </div>
  );
};
```

### 基础用法

<code src="./demos/basic.tsx" background="#f0f2f5" />

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 日志组件弹框显示和隐藏 | `boolean` | false |
| width | 日志组件弹框的宽度 | `number` | 750 |
| title | 日志组件弹框的标题 | `string` | 日志 |
| downLoadText | 日志组件弹框下载按钮的文字 | `string` | 日志下载 |
| logTabs | 日志组件渲染时必要的参数,具体项见下表 | `logTabs[]` | 750 |
| showRefresh | 是否展示日志组件顶部刷新按钮 | `boolean` | true |
| showDownLoad | 是否展示日志组件左下角下载按钮 | `boolean` | false |
| onRefresh | 日志组件刷新按钮事件，回传接受两个 string 类型参数，tabPaneKey 是 tabPane 的 key，selectValue 是日志组件中下拉框的 value | `function(tabPaneKey,selectValue)` | () => {} |
| onLoadMore | 日志组件滑动滚动条加载更多事件,回传接受三个参数，page 是分页的页码，tabPaneKey 是 tabPane 的 key，selectValue 是日志组件中下拉框的 value | `function(page, tabPaneKey, selectValue)` | () => {} |
| onClose | 日志组件弹框关闭或者取消事件 | `function()` | () => {} |
| onDownload | 日志组件弹框下载事件 | `function()` | () => {} |

## logTabs

| 参数        | 说明                             | 类型                               | 默认值 |
| ----------- | -------------------------------- | ---------------------------------- | ------ |
| title       | 日志组件 tabPane 的标题          | `string`                           | -      |
| key         | 日志组件 tabPane 的 key          | `string`                           | -      |
| active      | 控制日志组件‘进行中’的显示和隐藏 | `boolean`                          | -      |
| processList | 日志组件下拉框选项               | `{ label, value }[]`               | -      |
| logs        | 日志组件正文                     | `{date: string;message: string}[]` | -      |
| emptyMsg    | 日志组件为空时的提示文案         | `string`                           | -      |
| showLoading | 日志组件内部的 loading           | `boolean`                          | -      |
| processId   | 日志组件下拉框 value 属性的值    | `string`                           | -      |
