---
title: SPE - 简单卡片组件
group:
  path: /
nav:
  title: 组件
  path: /components
---

# Card 卡片

Card 规定了顶栏

## 代码演示

```javascript
import React from 'react';
import { Card } from '../../../index';

export default () => {
  return (
    <>
      <Card
        titleText="主标题"
        subTitleText="副标题"
        className="conten-resource-profile"
        style={{
          width: 300,
          margin: '36px auto',
        }}
      >
        <div slot="content">
          <h4>Card 内容</h4>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </div>
      </Card>
    </>
  );
};
```

### 基本用法

<code src="./demos/basic.tsx" iframe="200px" />

## API

View

| 参数         | 说明                                      | 类型      | 默认值       |
| ------------ | ----------------------------------------- | --------- | ------------ |
| titleText    | 主标题                                    | `any`     | 1            |
| subTitleText | 副标题                                    | `any`     | []           |
| showHead     | 是否展示头                                | `boolean` | true         |
| headClass    | 头部样式 class，可选值有 head-style-[1-4] | `string`  | head-style-1 |
