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
import { Button } from 'antd';
import { Card } from '../../../index';

export default () => {
  const click = (e) => {
    console.log(e, 'e');
    // 除了参数说明中的参数，还支持传递各种参数，参数说明以外的任何参数均作用到了该组件的最外层的 div 上，例子：传递 onClick 事件，该事件作用到了该组件最外层的 div 上
  };
  return (
    <>
      <Card
        titleText="Card 实例"
        subTitleText="副标题"
        className="conten-resource-profile"
        style={{
          width: 300,
          margin: '36px auto',
        }}
        onClick={click}
      >
        <div slot="headRight">
          <Button>编辑</Button>
        </div>
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

| 参数         | 说明                                      | 类型    | 默认值       |
| ------------ | ----------------------------------------- | ------- | ------------ |
| titleText    | 主标题                                    | any     | 1            |
| subTitleText | 副标题                                    | any     | []           |
| showHead     | 是否展示头                                | boolean | true         |
| headClass    | 头部样式 class，可选值有 head-style-[1-4] | string  | head-style-1 |
