---
title: SPE - 面包屑组件
group:
  path: /
nav:
  title: 组件
  path: /components
---

## Breadcrumb

Breadcrumb 封装了 SPE 样式的面包屑，入参 routersList 控制面包屑内容，其结构为

```tsx | pure
[{
  title: string;
  click?: () => void;
}]
```

click 不传则为不可点击，最后一个 item 不可点击。

目前 Breadcrumb 主要配合 View 组件一起使用。

### 代码演示

```javascript
import React from 'react';
import { Breadcrumb } from '../../../index';

export default () => {
  const click = () => {
    console.warn('可以点击');
  };
  const routersList = [
    { title: '列表' },
    {
      title: '可点击项',
      click: click,
    },
    { title: '详情', click: click },
  ];
  return <Breadcrumb routersList={routersList} />;
};
```

#### 基本使用

<code src="./demos/basic.tsx" iframe="200px"/>

### API

Breadcrumb

| 参数        | 说明     | 类型                            | 默认值 |
| ----------- | -------- | ------------------------------- | ------ |
| routersList | 标题配置 | `{title: string,click: func}[]` | []     |
