---
title: 手风琴表格 CollapseTable
group:
  title: 基础业务组件
  path: /components
nav:
  path: /spe
  title: SPE 组件
---

## CollapseTable

CollapseTable 结合 antd 的 Collapse 和 Table 形成的手风琴 table 组件, 该组件内部有训练列表和模型管理的训练模型列表两个页面上的交互逻辑，后期如果遇到和这两个页面逻辑一样可以直接使用组件内部的逻辑（参考参数说明以及 spe 这两个页面的逻辑），也可以不使用内部逻辑(不传递 flag)。

#### 基本使用

<code src="./demos/basic.tsx" />

### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelList | 构成折叠面板列表的数据 | `object[]` | [] |
| rightExtra | 可选， Collapse 手风琴面板右上角的 div, collapseItem 是 dataSource 中对应的数据 | `(collapseItem: any) => ReactNode` | - |
| columns | 表格列的配置描述,和 antd 的 table 组件的 columns 格式以及用法一样 | `object[]` | [] |
| collapseHeader | 可选， 它是整个 Collapse 手风琴面板的 div, collapseItem 是 dataSource 中对应的数据 | `(collapseItem: any) => ReactNode` | - |
| rowSelection | Table 的 rowSelection | 参考 antd.Table 组件 |  |
| expandIconPosition | 可选， Collapse 手风琴面板展开合上 icon 位置 | `string` | left |
| rowKey | 可选， 同 antd 中 table 组件的 rowKey 用法一样 | `string` 或者 `(record)=> string` | id |
| className | 组件的 className | `string` | '' |
| collapseLeftTitleClassName | 折叠面板 head 左侧的 className | `string` | '' |
| panelClick | 可选， 整个 Collapse 手风琴面板的点击事件，collapseItem 是 dataSource 中对应的数据 | `(collapseItem:any)=>{}` | (collapseItem:any)=>{} |
| dataSource | Collapse 手风琴的数据,数组的对象中的字段可根据实际情况随意定，格式可参考上面例子 | `object[]` | [] |
| pagination | 可选， 同 antd 中 table 组件的 pagination 用法一样 | `object{}` | null |
| flag | 可选， 组件内有训练列表和模型管理的训练模型列表两个页面上的交互逻辑，后期组件的复用根据交互，来区分是否需要复用组件内部逻辑（建议不要再使用内部逻辑了，内部逻辑完全可以通过 panelClick 事件来代替），false 不复用组件内部逻辑，true 复用组件内部逻辑 | `boolean` | false |
| showArrow | 是否展示向下箭头 | `boolean` | true |
| doNotReset | 是否重置展开的 key | `boolean` | false |
| onChangeCollapse | 当前 active 的折叠面板变化回调 | `(index: number) => void` | ()=>{} |
| onCollapseOpen | 打开折叠面板回调 | `(index: number) => void` | ()=>{} |

### flag

flag=true 时需要考虑以下参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| subPageApi | 子表格的获取数据的 api | `() => void` | () => {} |
| subPageParams | 子表格 api 调用时参数的处理，返回一个数组 | `() => any[]` | () => any[] |
| subPageSize | 子表格一页条数 | `number` | 5 |
| updateTable | 父组件回调 | ` any，(obj) => void` | null |
| giveFarDataSource | 给父组件传递 tableDataSource | `(item: any, subPagingLength: any) => void` | (item: any, subPagingLength: any) => void |
