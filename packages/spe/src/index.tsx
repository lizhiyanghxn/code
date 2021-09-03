// // import React, { useEffect, useState } from 'react';
import Breadcrumb from './components/Breadcrumb';
import type { BreadcrumbPropsType } from './components/Breadcrumb';
import { BasicView } from './components/View';
import type { BasicViewPropsType } from './components/View';
import { DetailView } from './components/View';
import type { DetailViewPropsType } from './components/View';
import Steps from './components/Steps';
import type { StepsPropsType } from './components/Steps';
import CollapseTable from './components/CollapseTable';
import type { CollapseTablePropsType } from './components/CollapseTable';

import './index.scss';

export { Breadcrumb, BasicView, DetailView, Steps, CollapseTable };

export type {
  BreadcrumbPropsType,
  BasicViewPropsType,
  DetailViewPropsType,
  StepsPropsType,
  CollapseTablePropsType,
};
