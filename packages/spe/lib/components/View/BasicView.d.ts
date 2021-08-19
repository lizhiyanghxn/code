import React from 'react';
import type { PaginationProps } from 'antd/lib/pagination';
import './BasicView.scss';
import type { BreadcrumbPropsType } from '../Breadcrumb';
import type { TabsPropsType } from '../Tabs';
export declare type BasicViewPropsType = BreadcrumbPropsType & TabsPropsType & {
    viewType?: string;
    toolEle?: any;
    pagingConfig?: null | PaginationProps;
    headerRightEle?: React.ReactElement;
    bodyNoScroll?: boolean;
};
declare const BasicView: React.FC<BasicViewPropsType>;
export default BasicView;
