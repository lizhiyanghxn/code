/**
 * 带‘----’的，表示这些参数是训练列表和模型训练的训练模型需要的参数，这两个页面的Panel展开后需要请求，
 * 后期遇到展开后需要请求的可以继续使用带‘----’的参数或者通过onclick参数在父组件中处理逻辑，如果展开不需要请求或者使用onclick参数，则不需要关注该组件内部的逻辑， 只需要关注传参即可
 */
import React from 'react';
import type { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import type { ExpandIconPosition } from 'antd/lib/collapse/Collapse';
export declare type CollapseTablePropsType = {
    onChangeCollapse?: (index: number) => void;
    onCollapseOpen?: (index: number) => void;
    subPageSize?: number;
    subPageApi?: (...p: any[]) => Promise<any>;
    subPageParams?: (...p: any[]) => any[];
    updateTable?: (...p: any[]) => void;
    giveFarDataSource?: (...p: any[]) => void;
    modelList?: any[];
    collapseHeader: (item: any, index: number) => React.ReactNode;
    rightExtra?: (item: any) => React.ReactNode;
    columns: ColumnsType<any>;
    rowSelection?: any;
    expandIconPosition?: ExpandIconPosition;
    className?: string;
    rowKey?: string;
    collapseLeftTitleClassName?: string;
    panelClick?: (item: any) => void;
    dataSource?: any[];
    pagination: TablePaginationConfig;
    flag?: boolean;
    showArrow?: boolean;
    doNotReset?: boolean;
};
declare const CollapseTable: React.FC<CollapseTablePropsType>;
export default CollapseTable;
