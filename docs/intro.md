---
title: 简介
order: 1
group:
  path: /
nav:
  title: 文档
  order: 1
  path: /docs
---

## DCP Components 简介

DCP 所属业务下的产品基本都是使用 React 技术栈开发，其组件库是基于 Antd 为基础进行开发，例如 `Sense Parrots Enterprise`，DCP 线下的业务管理系统 `SenseGear Petrel`，`监控平台` 和 `运营平台` 等。在实际的开发中，有较多的设计组件都是重复出现的，比如 SPE 系统下的列表页，详情页，分步骤页等的设计样式都是统一的，为了提示代码的复用率和精简代码，对这样的特定业务设计组件进行抽象是有必要的。

## 设计思路

DCP Components 是基于 Antd 基础进行封装，按照使用频率，组件初步设计为页容器组件和业务基础组件

- [页容器 View](/spe/components/view)

  - BasicView - 基础页布局容器
  - DetailView - 详情页布局容器
  - ListView - 表单表格页布局容器
  - TabView - 标签页布局容器
  - StepView - 步骤页布局容器

- 业务基础组件
  - [日志 Logger](/spe/components/logger)
  - [面包屑 Breadcrumb](/spe/components/breadcrumb)
  - [手风琴表格 CollapseTable](/spe/components/collapse-table)
  - [弹性表格 ResizeTable](/spe/components/resize-table)
  - [步骤条 Steps](/spe/components/steps)
  - [提示 CommonTip](/spe/components/common-tip)
  - [省略时提示 EllipsisTip](/spe/components/ellipsis-tip)
  - [图表 Echarts](/spe/components/echarts)

### 设计与样式

### 开发语言

我们开发推荐使用 TypeScript，当然使用 js 在项目里开发组件也是完全没有问题的。

### 开发与贡献

我们使用了 [monorepo](https://danluu.com/monorepo/) 的方式来管理我们的仓库，仓库中包含多个独立的包，以便于更改可以一起联调，这样可以一起跑测试用例，如果变更出现问题，我们可以很快的定位到问题。

因为使用了 monorepo ,我们要求必须要使用 yarn 来安装依赖。[`workspace`](https://classic.yarnpkg.com/en/docs/workspaces#search) 可以帮助我们在多个包中共享依赖。

安装完成后你可以使用以下命令：

- `yarn start` 预览你的改动
- `yarn lint` 检查代码风格
- `yarn tsc` 检查 TypeScript 是否符合规范
- `yarn test` 测试代码是否可以通过测试用例
- `yarn test:coverage` 测试仓库的测试覆盖率
- `yarn build` 编译当前组件库

我们建议运行 `yarn test` 或前文提及的 linter 以确保你的代码变更有没有影响原有功能，同时保证你写的每行代码都被正确的测试到，不管怎样这样都会提升组件库的整体质量。

如果你增加了一个新功能，请添加测试后再提交 pr，这样我们能确保以后你的代码不出问题。

### 脚手架概览

当我们 clone 完项目之后会看到如下的目录结构。

```bash
- .dumi              * dumi 的相关配置，主要是主题等
- .github            * github 的 action 和相关的 issue 配置
- docs               * 存放公用的文档
- packages           * 我们维护的包, 如果你想贡献代码，这里是你最需要关注的
- README.md          * 展示在 github 主页的代码
- tests              * 编写测试用例的地方
- public             * 部署官网所用的静态文件
- scripts            * 开发或者部署所用的脚本
- .prettierrc.js     * prettier 的相关配置
- .eslintrc.js       * eslint 的配置
- .fatherrc.ts       * 编译脚手架的配置
- .umirc.js          * dumi 的核心配置
- webpack.config.js  * 编译 umd 包的配置文件
- jest.config.js     * 测试环境的配置
- lerna.json         * 多包的配置
- package.json       * 项目的配置
- tsconfig.json      * typescript 的配置
- yarn.lock          * 依赖 lock 文件
```

`coverage` 和 `.umi` 这两个文件夹比较特殊，`coverage` 是测试覆盖率文件，在跑完测试覆盖率后才会出现，`.umi` 是运行时的一些临时文件，在执行 `npm run start` 时生成。

### 风格指南

我们使用自动化代码格式化软件 [`Prettier`](https://prettier.io/)。 对代码做出更改后，运行 `npm run prettier`。当然我们更推荐 prettier 的插件，随时格式化代码。

> 我们的 CI 会检查代码是否被 prettier，在提交代码前最好执行一下 `npm run prettier`。

之后，`linter` 会捕获代码中可能出现的多数问题。 你可以运行 `npm run lint` 来检查代码风格状态。

不过，`linter` 也有不能搞定的一些风格。如果有些东西不确定，请查看 [Airbnb’s Style Guide](https://github.com/airbnb/javascript) 来指导自己。
