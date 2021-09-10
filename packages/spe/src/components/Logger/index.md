---
title: 日志 Logger
order: 1
group:
  title: 基础业务组件
  path: /components
nav:
  path: /spe
  title: SPE 组件
---

# Logger

spe 统一的日志展示组件,该组件字段名称、整体样式较为固定，使用前先和 spe 已经存在的日志组件进行交互和视觉对比。

## 代码演示

```javascript
import React, { useState } from 'react';
import { Button } from 'antd';
import Logger from '../index';

const getProcessLabel = (id: number) => `进程${id}`;

const initialLogTabs = [
  {
    title: '数据格式转换',
    activeTitle: '数据格式转换(当前)',
    defaultTitle: '数据格式转换',
    key: 'dataconverter',
    processList: [{ label: getProcessLabel(0), value: 0 }],
    logs: [],
  },
  {
    title: '测试',
    activeTitle: '测试(当前)',
    defaultTitle: '测试',
    key: 'test',
    processList: [{ label: getProcessLabel(0), value: 0 }],
    logs: [],
  },
];

export default () => {
  const [show, setShow] = useState(false);

  const testId = '123';

  const getTestLogs = (testId: string, params: any) =>
    new Promise((resolve) => {
      console.log('params', params);
      setTimeout(() => {
        if (params.page >= 4 || params.page <= 0) {
          resolve({
            list: [],
            total: 60,
          });
        }
        const list = [];
        for (let i = 0; i < 20; i++) {
          list[i] = {
            date: `2021/09/01 13:59:${i}`,
            message:
              '[359.718.0.0.out] Begin analyzing results [359.718.0.0.out] Begin analyzing results[359.718.0.0.out] Begin analyzing results',
          };
        }
        resolve({
          list,
          total: 60,
        });
      }, 500);
    });

  return (
    <div>
      <Button type="primary" onClick={() => setShow(!show)}>
        展开日志
      </Button>
      <Logger
        show={show}
        showInit={show && testId}
        initialLogTabs={initialLogTabs}
        gpuPodNumber={4}
        initialActiveKey="dataconverter"
        logApi={(params = {}) => getTestLogs(testId, params)}
        onDownload={() => alert('下载中...')}
        onClose={(e) => setShow(e)}
        getProcessLabel={getProcessLabel}
        showDownLoad
        title="日志"
        downLoadText="下载日志"
        confirmText="确认"
        logEmptyMsg="该任务日志为空"
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
| showInit | 弹框打开时控制刷新日志（show 和 id 等变化时触发） | `any` | false |
| initialLogTabs | 日志 | `Array` | [] |
| gpuPodNumber | 进程数量 | `number` | 1 |
| initialActiveKey | 初始激活 TAB（当前） | `string` | dataconverter |
| logApi | 获取 LOG 的 API 接口，path 参数请预先传入，组件内只传 params 参数 | `(params: {}) => Promise<{list:[], total:number}>` |  |
| onDownload | 下载 log 的接口，参数请预先传入 | `Function` | ()=>{} |
| onClose | 控制弹框 show 状态 | `Function` |  |
| getProcessLabel | 进程 label 展示 | `Function` | ()=>'' |
| showRefresh | 刷新按钮展示 | `boolean` | true |
| showDownLoad | 下载按钮展示 | `boolean` | false |
| width | 宽度 | `number` | 750 |
| title | 标题 | `string` | 日志 |
| downLoadText | 左下按钮 | `string` | 下载日志 |
| confirmText | 右下按钮 | `string` | 确定 |
| logEmptyMsg | 内容为空时展示 | `string` | 日志为空 |

## logTabs

| 参数        | 说明                          | 类型                               | 默认值 |
| ----------- | ----------------------------- | ---------------------------------- | ------ |
| title       | 日志组件 tabPane 的标题       | `string`                           | -      |
| activeTitle | 为当前状态时 tabPane 的标题   | `string`                           | -      |
| activeTitle | 不为当前状态时 tabPane 的标题 | `string`                           | -      |
| key         | 日志组件 tabPane 的 key       | `string`                           | -      |
| processList | 日志组件下拉框选项            | `{ label, value }[]`               | -      |
| logs        | 日志组件正文                  | `{date: string;message: string}[]` | -      |
