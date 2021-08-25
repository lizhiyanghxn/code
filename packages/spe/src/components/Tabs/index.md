---
title: SPE - 标签页组件
group:
  path: /
nav:
  title: 组件
  path: /components
---

# Tabs 标签页

Tabs 封装了 SPE 样式的标签页

## 代码演示

```javascript
import React, { useState } from 'react';
import { Tabs } from '../../../index';

export default () => {
  const [active, setActive] = useState(2);
  const onTabChange = (index: number) => {
    console.log('current index is', index);
    setActive(index);
  };
  const tabsConfig = ['页签一', '页签二', '页签三'];
  return (
    <>
      <Tabs
        defaultActive={2}
        tabsConfig={tabsConfig}
        onTabChange={onTabChange}
        style={{ margin: 24 }}
      />
      {active === 0 ? <div style={{ margin: 24 }}>页签一</div> : null}
      {active === 1 ? <div style={{ margin: 24 }}>页签二</div> : null}
      {active === 2 ? <div style={{ margin: 24 }}>页签三</div> : null}
    </>
  );
};
```

### 基本用法

<code src="./demos/basic.tsx" iframe="200px" />

## API

View

| 参数          | 说明           | 类型                   | 默认值               |
| ------------- | -------------- | ---------------------- | -------------------- |
| defaultActive | 可选，当前步骤 | `number`               | 1                    |
| tabsConfig    | tabs 配置      | `string[]`             | []                   |
| onTabChange   | 切换 tabs 回调 | `(index:number) => {}` | (index:number) => {} |
