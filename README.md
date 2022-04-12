# DCP-Components

## 设计思路

DCP Components 是基于 Antd 基础进行封装，按照使用频率，组件初步设计为页容器组件和业务基础组件

- [页容器 View](./packages/spe/src/components/View/index.tsx)

  - BasicView - 基础页布局容器
  - DetailView - 详情页布局容器
  - ListView - 表单表格页布局容器
  - TabView - 标签页布局容器
  - StepView - 步骤页布局容器

- [业务基础组件](./packages/spe/src/index.tsx)
  - [日志 Logger](./packages/spe/src/components/Logger/index.tsx)
  - [手风琴表格 CollapseTable](./packages/spe/src/components/CollapseTable/index.tsx)
  - [弹性表格 ResizeTable](./packages/spe/src/components/ResizeTable/index.tsx)
  - [面包屑 Breadcrumb](./packages/spe/src/components/Breadcrumb/index.tsx)
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

## 部署到线上环境

```bash
yarn site
docker build -t registry.sensetime.com/sensegear/dcp-components:1.0.0 .
docker push registry.sensetime.com/sensegear/dcp-components:1.0.0
```

注：推送镜像有问题请联系继诚。 docker push 和 下面的 docker pull 之前都需要登陆：docker login -u xxx -p xxxx registry.sensetime.com

通过跳板机登录到 172.20.52.114 这个机器，更新服务进程

```bash
docker pull registry.sensetime.com/sensegear/dcp-components:1.0.0
docker stop [CONTAINER ID]  #需要先停止正在运行的容器，使用 docker container ls 查看运行中的容器。
docker run -d -it --rm -p 7000:80 registry.sensetime.com/sensegear/dcp-components:1.0.0
```

通过 `docker ps` 查看进程是否正常启动
