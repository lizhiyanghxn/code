import Logger from './components/Logger';
import type { LoggerParamsType } from './components/Logger';
import Breadcrumb from './components/Breadcrumb';
import type { BreadcrumbPropsType } from './components/Breadcrumb';
import Steps from './components/Steps';
import type { StepsPropsType } from './components/Steps';
import CollapseTable from './components/CollapseTable';
import type { CollapseTablePropsType } from './components/CollapseTable';

import './index.scss';

require('./index-style-only'); // 引入所有组件样式

export { BasicView, DetailView, ListView, StepView, TabView } from './components/View';

export { Logger, Breadcrumb, Steps, CollapseTable };

export type {
  BasicViewPropsType,
  DetailViewPropsType,
  ListViewPropsType,
  StepViewPropsType,
  TabViewPropsType,
} from './components/View';

export type { LoggerParamsType, BreadcrumbPropsType, StepsPropsType, CollapseTablePropsType };
