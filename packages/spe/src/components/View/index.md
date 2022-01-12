---
title: 页容器 View
group:
  title: 页容器组件
  path: /components
nav:
  path: /spe
  title: SPE 组件
---

# View

SPE 统一的页容器组件，整合了常用页面类型的排版和样式。

- [基础页布局容器](#基础页布局容器---basicview) -- [API](#api)
- [详情页布局容器](#详情页布局容器---detailview) -- [API](#api-1)
- [列表页布局容器](#列表页布局容器---listview) -- [API](#api-2)
- [步骤页布局容器](#步骤页布局容器---stepview) -- [API](#api-3)
- [Tab 页布局容器](#列表页布局容器---tabview) -- [API](#api-4)

### 基础页布局容器 - [BasicView](#基础页布局容器---basicview)

<code src="./demos/basic.tsx" iframe="500px" />

#### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| noHeader | 是否不显示头部 | `boolean` | false |
| routers | 页头左侧导航面包屑 | `Array<{ title: React.ReactNode; click?: (...rest: any[]) => any }>` | [] |
| headerRightElement | 页头右侧 | `React.ReactElement` |  |
| footerActions | 页面底部 | `Array<React.ReactElement>` | [] |
| className | 自定义样式类名 | `string` |  |

### 详情页布局容器 - [DetailView](#详情页布局容器---detailview)

<code src="./demos/detail.tsx" iframe="500px" />

#### API

扩展自 BasicView-[API](#api)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| leftAttrData | 左侧展示栏 | `Array<{ title: React.ReactNode; values: Array<{ attr: React.ReactNode; value: React.ReactNode }>; }>` | [] |
| rightPart | 右侧内容区域 | `React.ReactElement` |  |

### 列表页布局容器 - [ListView](#列表页布局容器---listview)

<code src="./demos/list.tsx" iframe="500px" />

#### API

扩展自 BasicView-[API](#api)

| 参数          | 说明                   | 类型                 | 默认值 |
| ------------- | ---------------------- | -------------------- | ------ |
| headExtra     | 内容区（查询表单上面） | `React.ReactNode`    |        |
| searchArea    | 查询表单区域           | `React.ReactElement` |        |
| pagingConfig  | 分页配置               | `Antd.Pagination`    |        |
| fixPagination | 分页器是否固定页面底部 | `boolean`            | true   |

### 步骤页布局容器 - [StepView](#步骤页布局容器---stepview)

<code src="./demos/step.tsx" iframe="500px" />

#### API

扩展自 BasicView-[API](#api)

| 参数        | 说明                              | 类型                                  | 默认值 |
| ----------- | --------------------------------- | ------------------------------------- | ------ |
| currentStep | 当前第几步                        | number                                | 1      |
| stepsConfig | 步骤条配置                        | `Array<string \| React.ReactElement>` | []     |
| scrollRef   | 传入一个 ref 用来绑定页面滚动容器 | `React.RefObject<HTMLDivElement>`     |        |

### Tab 页布局容器 - [TabView](#tab页布局容器---tabview)

<code src="./demos/tab.tsx" iframe="500px" />

#### API

扩展自 BasicView-[API](#api)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tabsConfig | Tab 配置 | `Record<string, { tab: React.ReactNode; children: React.ReactNode }>` |  |
| defaultTabKey | 默认 Tab 的 key | `string` | '' |
