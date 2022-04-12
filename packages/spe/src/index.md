---
title: SPE 组件总览
order: 0
group:
  path: /components
nav:
  path: /spe
  title: SPE 组件
  order: 2
---

# SPE 组件总览

组件目前大类可以分为页容器组件和基础业务组件，其中页容器组件是为了解决页面布局代码重复的问题，基础业务组件是在页面功能间有相似的功能的组件抽取。

## 页面容器组件

### 基础页布局容器 - [BasicView](./components/view#基础页布局容器---basicview)

<code src="./components/View/demos/basic.tsx" iframe="500px" />

### 详情页布局容器 - [DetailView](./components/view#详情页布局容器---detailview)

<code src="./components/View/demos/detail.tsx" iframe="500px" />

### 列表页布局容器 - [ListView](./components/view#列表页布局容器---listview)

<code src="./components/View/demos/list.tsx" iframe="500px" />

### 步骤页布局容器 - [StepView](./components/view#步骤页布局容器---stepview)

<code src="./components/View/demos/step.tsx" iframe="500px" />

### Tab 页布局容器 - [TabView](./components/view#tab-页布局容器---tabview)

<code src="./components/View/demos/tab.tsx" iframe="500px" />

## 基础业务组件

### 日志 - [Logger](./components/logger)

<code src="./components/Logger/demos/basic.tsx"/>

### 面包屑 - [Breadcrumb](./components/breadcrumb)

<code src="./components/Breadcrumb/demos/basic.tsx"/>

### 手风琴表格 - [CollapseTable](./components/collapse-table)

<code src="./components/CollapseTable/demos/basic.tsx"/>

### 弹性表格 - [ResizeTable](./components/resize-table)

<code src="./components/ResizeTable/demos/basic.tsx"/>

### 步骤条 - [Steps](./components/steps)

页面中

<code src="./components/Steps/demos/page.tsx" iframe="200px"/>

弹框中

<code src="./components/Steps/demos/modal.tsx" iframe="500px"/>

### 提示 - [CommonTip](./components/CommonTip)

<code src="./components/CommonTip/demos/basic.tsx" />

### 省略时提示 - [EllipsisTip](./components/EllipsisTip)

单独使用

<code src="./components/EllipsisTip/demos/basic.tsx" iframe="200px"/>

Table 中使用

<code src="./components/EllipsisTip/demos/useintable.tsx" iframe="300px"/>

### 图表 - [Echarts](./components/Echarts)

<code src="./components/Echarts/demos/basic.tsx" />
