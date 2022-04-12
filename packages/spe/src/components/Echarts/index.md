---
title: 图表 Echarts
group:
  title: 基础业务组件
  path: /components
nav:
  path: /spe
  title: SPE 组件
---

## Echarts

Echarts 基于 echarts，封装了 window.resize、tooltip 等功能。

### 基本使用

<code src="./demos/basic.tsx" />

### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | 高度 | `string` | '100%' |
| width | 宽度 | `string` | '100%' |
| option | echarts 的 setOptions 参数 | 参考[setOptions](https://echarts.apache.org/zh/api.html#echartsInstance.setOption) | {} |
| resize | 是否响应 window.resize 事件 | `boolean` | true |
| onlegendselectchanged | echarts 实例 legendselectchanged 回调 | 参考[legendselectchanged](https://echarts.apache.org/zh/api.html#events.legendselectchanged) |  |
| setChartInstance | 传出 echarts 实例供外部使用 | `instance => void` | () => {} |
| clear | 传出重置 echarts 的方法供外部使用 | `fn => void` | () => {} |
