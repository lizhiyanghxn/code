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

统一的日志展示组件

## 代码演示

```javascript
import React, { useState } from 'react';
import { Button } from 'antd';
import Logger from '../index';

const loggerConfig = {
  showDownLoad: true,
  hasLoadedData: false,
  title: '日志标题',
  downLoadText: '下载',
  logEmptyMsg: '暂无日志',
};

const logs = [
  { date: '2021-07-14 16:05:59', message: '日志正文' },
  { date: '2021-07-14 16:05:59', message: '日志第二行' },
];

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(!visible)}>
        展开日志
      </Button>
      <Logger
        {...loggerConfig}
        logs={logs}
        show={visible}
        showRefresh={true}
        hasMore={false}
        showLoading={false}
        onLoadMore={() => {}}
        onClose={() => setVisible(false)}
        onDownload={() => {}}
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
| visible | 显示和隐藏 | `boolean` | false |
| removeOnLeave | 隐藏时是否删除元素 | `boolean` | false |
| motionConfig | 自定义 motion 的配置（见 [rc-motion](https://www.npmjs.com/package/rc-motion)） | `object` | {} |
