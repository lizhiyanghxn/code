---
title: 步骤条 Steps
group:
  title: 基础业务组件
  path: /components
nav:
  path: /spe
  title: SPE 组件
---

# Steps 步骤条

Steps 封装了 SPE 的步骤条

### 弹框中步骤条

<code src="./demos/modal.tsx" iframe="400px" />

### 页面中步骤条

<code src="./demos/page.tsx" iframe="200px"/>

## API

View

| 参数        | 说明                                    | 类型       | 默认值  |
| ----------- | --------------------------------------- | ---------- | ------- |
| currentStep | 当前步骤                                | `number`   | 1       |
| stepsConfig | 步骤条配置                              | `string[]` | []      |
| usage       | 步骤条使用场景，取值'modal' 或者 'page' | `string`   | 'modal' |
| isCenter    | 步骤条是否居中                          | `boolean`  | false   |
