---
title: 页容器 View
group:
  title: 页容器组件
  path: /components
nav:
  path: /spe
  title: SPE 组件
---

# 页容器 View

在 SPE 系统中页容器有极大的相似性，简单总结来看有下面几种形式，详情页，表单列表页，表单手风琴列表页，标签页，步骤页。

## 详情页布局容器 - DetailView

```
1. 顶层左侧 Breadcrumb，右侧 actions
2. 内容部分左右布局，左侧小标题 + kv 结构，右侧自定义内容区
```

<code src="./demos/details.tsx" iframe="500px" />

## 表单表格页布局容器 - ListView

```
1. 顶层左侧 title，右侧 action，
2. 表单域有筛选 area，可以带 reset & refeash
3. 内容区域是列表显示与分页区域，分页区域相对固定在右下角
```

<code src="./demos/list.tsx" iframe="500px" />

## 表单手风琴表格页布局容器 - CallapseListView

```
1. 顶层左侧 title，右侧 action，
2. 表单域有筛选 area，可以带 reset & refeash
3. 内容区域是列表显示与分页区域，分页区域跟随内容区域
```

<code src="./demos/includeSublist.tsx" iframe="500px" />

## 标签页布局容器 - TabView

```
1. 顶层左侧 title，右侧 action，
2. 页签域为 antd 页签
3. 内容区域是具体页签对应的内容，可以是任意内容
```

<code src="./demos/tabs.tsx" iframe="500px" />

## 步骤页布局容器 - StepView

```
1. 顶层左侧 title，右侧 action，
2. 步骤域为 Steps 组件
3. 内容区域是任意表单内容，页脚操作域相对于内容区域摆放
```

<code src="./demos/step.tsx" iframe="500px" />
## API

### BasicView

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| routersList | BasicView 类型组件顶部内容，顶部左侧内容复用了 spe 的 Breadcrumb 组件 | `{title: string,click: func}[]` | [] |
| viewType | BasicView 类型组件,具体参数看下方的表 | `string` | - |
| toolEle | BasicView 类型组件自定义内容区顶部 | `string 或 ReactNodes` | - |
| pagingConfig | BasicView 类型组件内部的 Pagination 组件需要的参数，接收 antd 的 Pagination 组件的 api | `object{}` | - |
| children | BasicView 类型组件自定义内容 | `string 或 ReactNodes` | - |
| headerRightEle | BasicView 类型组件自定义内容区顶部右侧内容 | `string 或 ReactNodes` | - |
| bodyNoScroll | BasicView 类型组件自定义内容区是否需要滚动条 | `boolean` | false |

### viewType (根据取值，来判断是否需要使用该组件内部的 Pagination 分页)

| 取值             | 说明       |
| ---------------- | ---------- |
| 'List'           | 常用列表   |
| 'IncludeSublist' | 包含子列表 |
| 'TabList'        | 切换列表   |
| 'Details'        | 详情页     |
| 'Step'           | 步骤页     |

### DetailView

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| attrData | DetailView 类型组件自定义内容区左侧的元素 | `{title: any; values: [{attr: any;value: any}]}[]` | - |
| rightCustomize | DetailView 类型组件自定义内容区右侧部的元素 | `ReactNode` | - |
