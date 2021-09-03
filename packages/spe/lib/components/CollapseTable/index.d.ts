import React from 'react';
import type { HTMLAttributes } from 'react';
import './index.scss';
export declare type CollapseTablePropsType = HTMLAttributes & {
    onChangeCollapse?: (i: number) => void;
    subPageApi?: () => void;
    subPageParams?: () => any[];
    subPageSize?: number;
    updateTable?: any;
    giveFarDataSource?: (item: any, subPagingLength: any) => void;
    columns?: any[];
    dataSource?: any[];
    rowSelection?: any;
    collapseHeader?: (item: any) => React.ReactElement;
    rightExtra?: (item: any) => React.ReactElement;
    expandIconPosition?: string;
    flag?: boolean;
    tableDataSource?: any[];
    panelClick?: (item: any) => void;
    collapseLeftTitleClassName?: string;
    pagination?: object;
    rowKey?: any;
    tableParameter?: object;
};
declare const CollapseTable: React.FC<CollapseTablePropsType>;
export default CollapseTable;
