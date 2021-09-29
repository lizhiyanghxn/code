// // import React, { useEffect, useState } from 'react';
import Logger from './components/Logger';
import type { LoggerParamsType } from './components/Logger';
import ImageAnalysis from './components/ImageAnalysis';
import type { ImageAnalysisType } from './components/ImageAnalysis';
import AnnotationCanvas, {
  constant,
  formatInitResult,
  getLabels,
} from './components/ImageAnalysis/utils/AnnotationCanvas';
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

export { Logger, ImageAnalysis, Breadcrumb, BasicView, DetailView, Steps, CollapseTable };
export { AnnotationCanvas, constant, formatInitResult, getLabels };

export type {
  LoggerParamsType,
  ImageAnalysisType,
  BreadcrumbPropsType,
  BasicViewPropsType,
  DetailViewPropsType,
  StepsPropsType,
  CollapseTablePropsType,
};
