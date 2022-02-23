---
title: 日志 Logger
order: 1
group:
  title: 基础业务组件
  path: /components
nav:
  path: /spe
  title: SPE 组件
---

# Logger

spe 统一的日志展示组件,该组件字段名称、整体样式较为固定，使用前先和 spe 已经存在的日志组件进行交互和视觉对比。

### 基础用法

<code src="./demos/basic.tsx" />

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 日志组件弹框显示和隐藏 | `boolean` | false |
| showInit | 弹框打开时控制刷新日志（show 和 id 等变化时触发） | `any` | false |
| isPageMode | 是否为页面模式，页面模式下 show 参数无需设置 | `boolean` | false |
| initialLogTabs | 日志 | `Array` | [] |
| subTaskIds | 超参子任务 | `Array<number>` | [] |
| gpuPodNumber | 进程数量 | `number` | 1 |
| initialActiveKey | 初始激活 TAB（当前） | `string` | dataconverter |
| logApi | 获取 LOG 的 API 接口，path 参数请预先传入 | `(params: any, extraConfig?: any) => Promise<{list: [], total: number}>` | () => {} |
| onDownload | 下载 log 的接口，参数请预先传入 | `Function` | () => {} |
| onClose | 控制弹框 show 状态 | `Function` |  |
| getSubTaskLabel | 超参任务 label 展示 | `Function` | (id) => 'id' |
| getProcessLabel | 进程 label 展示 | `Function` | (id) => 'id' |
| showRefresh | 刷新按钮展示 | `boolean` | true |
| showDownLoad | 下载按钮展示 | `boolean` | false |
| width | 宽度 | `number` | 750 |
| title | 标题 | `string` | 日志 |
| downLoadText | 左下按钮 | `string` | 下载日志 |
| confirmText | 右下按钮 | `string` | 确定 |
| logEmptyMsg | 内容为空时展示 | `string` | 日志为空 |

## logTabs

| 参数        | 说明                          | 类型                                     |
| ----------- | ----------------------------- | ---------------------------------------- |
| title       | 日志组件 tabPane 的标题       | `string`                                 |
| activeTitle | 为当前状态时 tabPane 的标题   | `string`                                 |
| activeTitle | 不为当前状态时 tabPane 的标题 | `string`                                 |
| key         | 日志组件 tabPane 的 key       | `string`                                 |
| processList | 日志组件下拉框选项            | `Array<{label, value}>`                  |
| logs        | 日志组件正文                  | `Array<{date: string; message: string}>` |
