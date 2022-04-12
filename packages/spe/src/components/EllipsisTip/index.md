---
title: 省略时提示组件 EllipsisTip
group:
  title: 基础业务组件
  path: /components
nav:
  path: /spe
  title: SPE 组件
---

## EllipsisTip

EllipsisTip 基于 antd.Tooltip，封装了省略时提示的功能。只有内容超出容器时，才可以触发悬浮提示。

当 `isParentEllipsis` 为 `false` 时，子节点需设置以下 ellipsis 样式，同时必须保证 children 为单一节点。

```css
 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

### 单独使用

<code src="./demos/basic.tsx" />

### Table 中使用

<code src="./demos/useintable.tsx" />

### API

扩展自[antd.Tooltip](https://ant.design/components/tooltip-cn/#API)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| isParentEllipsis | 默认子节点需设置了 ellipsis 样式，必须保证 children 为单一节点；设置 isParentEllipsis 为 true 时，表示父节点设置了 ellipsis 样式（适合 Table 组件 column 设置了 ellipsis） | `boolean` | false |
| title | 同 antd.Tooltip，当 title 和 children 一致时，可省略 children | `React.ReactNode` | '' |
