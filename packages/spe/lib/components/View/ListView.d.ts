import React from 'react';
import type { BasicViewPropsType } from './BasicView';
export declare type ListViewPropsType = BasicViewPropsType & {
    headExtra?: React.ReactNode;
    searchArea?: React.ReactElement;
    pagingConfig?: any;
    fixPagination?: boolean;
    children: React.ReactElement;
    className?: string;
};
declare const ListView: React.FC<ListViewPropsType>;
export default ListView;
