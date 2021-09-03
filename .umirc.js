import { readdirSync } from 'fs';
import chalk from 'chalk';
import { join } from 'path';

const headPkgList = [];
// utils must build before core
// runtime must build before renderer-react
const pkgList = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
);

const alias = pkgList.reduce((pre, pkg) => {
  pre[`@dcp-fe/dcp-${pkg}`] = join(__dirname, 'packages', pkg, 'src');
  return {
    ...pre,
  };
}, {});

console.log(`🌼 alias list \n${chalk.blue(Object.keys(alias).join('\n'))}`);

const tailPkgList = pkgList
  .map((path) => [join('packages', path, 'src'), join('packages', path, 'src', 'components')])
  .reduce((acc, val) => acc.concat(val), []);

const isProduction = process.env.NODE_ENV === 'production';

export default {
  title: 'DCP Components',
  mode: 'site',
  logo: '/logo.svg',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  sass: {
    implementation: require('node-sass'),
  },
  metas: [
    {
      property: 'og:site_name',
      content: 'DCP Components',
    },
  ],
  alias,
  resolve: {
    includes: [...tailPkgList, 'docs'],
  },
  locales: [['zh-CN', '中文']],
  navs: {
    'zh-CN': [
      null,
      {
        title: 'GitLab',
        path: 'https://gitlab.sz.sensetime.com/dcp-fe/dcp-components',
      },
    ],
  },
  analytics: isProduction
    ? {
        ga: 'UA-173569162-1',
      }
    : false,
  hash: true,
  ssr: {
    devServerRender: false,
  },
  exportStatic: {},
  targets: {
    chrome: 80,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  theme: {
    '@s-site-menu-width': '258px',
  },
  links:
    process.env.NODE_ENV === 'development'
      ? ['https://gw.alipayobjects.com/os/lib/antd/4.8.3/dist/antd.css']
      : [],
  menus: {
    '/spe': [
      {
        title: '组件总览',
        children: ['index'],
      },
      {
        title: '页容器组件',
        children: ['View/index'],
      },
      {
        title: '基础业务组件',
        children: [
          'Logger/index',
          'ImageAnalyseModal/index',
          'Breadcrumb/index',
          'CollapseTable/index',
          'Steps/index',
        ],
      },
    ],
    '/dcp': [
      {
        title: '基础业务组件',
        children: ['HelloDCP/index'],
      },
    ],
  },
};
