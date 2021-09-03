import React from 'react';
import type { PaginationProps } from 'antd/lib/pagination';
import type { BreadcrumbPropsType } from '../Breadcrumb';
import './BasicView.scss';
export declare type BasicViewPropsType = BreadcrumbPropsType & {
    viewType?: string;
    toolEle?: any;
    pagingConfig?: null | PaginationProps;
    headerRightEle?: React.ReactElement;
    bodyNoScroll?: boolean;
};
declare const BasicView: React.FC<BasicViewPropsType>;
export default BasicView;
