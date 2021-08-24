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

### 列表页

<code src="./demos/list.tsx" iframe="500px" />

### 包含子列表的列表页

<code src="./demos/includeSublist.tsx" iframe="500px" />

### 详情页

<code src="./demos/details.tsx" iframe="500px" />

### Tabs 页面

<code src="./demos/tabs.tsx" iframe="500px" />

### 多步骤页面

<code src="./demos/step.tsx" iframe="500px" />

## API

View

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| titleConfig | 标题配置 | 数组 or 对象 | [] |
| titleAutoTrigger | 标题是否可点击 | boolean | false |
| attrData | DetailView 组件自定义内容区左侧的元素 例子 attrData={title: any;values: [{attr: any;value: any}]} | arry[] | - |
| rightCustomize | DetailView 组件自定义内容区右侧部的元素 | ReactNode | - |
