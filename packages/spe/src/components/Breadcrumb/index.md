---
title: SPE - 面包屑组件
group:
  path: /
nav:
  title: 组件
  path: /components
---

## Breadcrumb

Breadcrumb 封装了 SPE 样式的面包屑，SPE 面包屑一般是二级目录，切第二级的目录不可点击

```tsx | pure
<Breadcrumb
  titleConfig={{
    routers: [
      { name: '模型列表', path: '/modelManage', backType: 'replace' },
      { name: '模型详情',
    ],
  }}
  titleAutoTrigger={true}
/>
```

### 代码演示

#### 基本使用

<code src="./demos/basic.tsx" iframe="200px" title="Breadcrumb 基本使用" desc="Breadcrumb 基本使用情况" />

### API

Breadcrumb

| 参数             | 说明           | 类型         | 默认值 |
| ---------------- | -------------- | ------------ | ------ |
| titleConfig      | 标题配置       | 数组 or 对象 | []     |
| titleAutoTrigger | 标题是否可点击 | boolean      | false  |
