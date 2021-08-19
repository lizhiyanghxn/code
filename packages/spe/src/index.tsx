// // import React, { useEffect, useState } from 'react';
import Breadcrumb from './components/Breadcrumb';
import type { BreadcrumbPropsType } from './components/Breadcrumb';
import { BasicView } from './components/View';
import type { BasicViewPropsType } from './components/View';
import { DetailView } from './components/View';
import type { DetailViewPropsType } from './components/View';
import Steps from './components/Steps';
import type { StepsPropsType } from './components/Steps';
import Tabs from './components/Tabs';
import type { TabsPropsType } from './components/Tabs';
import Card from './components/Card';
import type { CardPropsType } from './components/Card';
import CollapseTable from './components/CollapseTable';
import type { CollapseTablePropsType } from './components/CollapseTable';

import './index.scss';

export { Breadcrumb, Tabs, Card, BasicView, DetailView, Steps, CollapseTable };

export type {
  BreadcrumbPropsType,
  TabsPropsType,
  CardPropsType,
  BasicViewPropsType,
  DetailViewPropsType,
  StepsPropsType,
  CollapseTablePropsType,
};
