import React from 'react';
import type { TooltipProps } from 'antd/lib/tooltip';
export declare type EllipsisTipType = {
    isParentEllipsis?: boolean;
} & TooltipProps;
/** 默认是子节点设置了ellipsis样式，此时必须保证children为单一节点 设置isParentEllipsis时，表示父节点设置了ellipsis样式（适合Table组件column设置了ellipsis） */
declare const EllipsisTip: React.FC<EllipsisTipType>;
export default EllipsisTip;
