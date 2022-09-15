import React from 'react';
import type { TableProps } from 'antd/lib/table';
export declare type ResizeTableType = {
    usage?: 'page' | 'modal';
    visible?: boolean;
    dataSource: any[];
    children?: any;
    scrollWidth?: number;
} & TableProps<any>;
/** Visible是对tabs场景下，被隐藏的table再突然显示时，表格高度初始化失败的情况 visible 表格是否被显示，隐藏状态下设置数据为空数组，这样显示时才会刷新高度 */
declare const ResizeTable: React.FC<ResizeTableType>;
export default ResizeTable;
