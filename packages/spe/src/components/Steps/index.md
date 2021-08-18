---
title: SPE - 步骤条组件
group:
  path: /
nav:
  title: 组件
  path: /components
---

# Steps 步骤条

Steps 封装了 SPE 的步骤条

## 代码演示

### 弹框中步骤条

<code src="./demos/modal.tsx" iframe="500px" />

### 页面中步骤条

<code src="./demos/page.tsx" iframe="200px"/>

## API

View

| 参数        | 说明           | 类型             | 默认值  |
| ----------- | -------------- | ---------------- | ------- |
| currentStep | 当前步骤       | number           | 1       |
| stepsConfig | 步骤条配置     | string[]         | []      |
| usage       | 步骤条使用场景 | 'modal' / 'page' | 'modal' |
| isCenter    | 步骤条是否居中 | boolean          | false   |
