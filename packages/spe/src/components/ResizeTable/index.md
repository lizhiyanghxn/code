---
title: 弹性表格 ResizeTable
group:
  title: 基础业务组件
  path: /components
nav:
  path: /spe
  title: SPE 组件
---

## ResizeTable

ResizeTable 可以自动适应页容器的高度和宽度，解决 Table 表头固定时自适应布局困难的问题

### 基本使用

<code src="./demos/basic.tsx"/>

### API

扩展自 antd.Table

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| usage | 容器类型：page/modal, page 时滚动宽度固定为 1216 | `string` | 'page' |
| visible | visible 是对 tabs 场景下，被隐藏的 table 再突然显示时，表格高度初始化失败的情况, 隐藏状态下设置数据为空数组，这样显示时才会刷新高度 | `boolean` | true |
