# DCP-Components

## 设计思路

DCP Components 是基于 Antd 基础进行封装，按照使用频率，组件初步设计为页容器组件和业务基础组件

- [页容器 View](./packages/spe/src/components/View/index.tsx)

  - BasicView - 基础页布局容器
  - DetailView - 详情页布局容器
  - ListView - 表单表格页布局容器
  - CallapseList - 表单手风琴表格页布局容器
  - TabView - 标签页布局容器
  - StepView - 步骤页布局容器

- [业务基础组件](./packages/spe/src/index.tsx)
  - [日志 Logger](./packages/spe/src/components/Logger/index.tsx)
  - [卡片基础容器 ContentBox](./packages/spe/src/components/Card/index.tsx)
  - [图片分析组件 ImageAnalyse](./packages/spe/src/components/ImageAnalysis/index.tsx)
  - [步骤条 Steps](./packages/spe/src/components/Steps/index.tsx)

## 本地开发 & 构建

```bash
yarn
yarn start
```

```bash
yarn build
```

## 推送公司 npm 仓库

包含 build 构建过程，自动升级版本，changelog 生成，发布 npm 仓库等。参考脚本说明 [release.js](./scripts/release.js)

```bash
yarn release
```

## 本地在业务项目中调试

1. 前置准备：全局安装 yalc

```bash
yarn global add yalc
```

2. 发布 Spe 组件库到本地，每次修改代码后也需要执行（已经包含了 build）

```bash
yarn yalc-push:spe
```

3. 业务项目

- 开启调试：添加本地依赖

```bash
yarn yalc-add:spe
```

- 结束调试：恢复线上依赖

```bash
yarn yalc-remove
```
