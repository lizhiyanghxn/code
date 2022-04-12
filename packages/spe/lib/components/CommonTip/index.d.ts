import React from 'react';
import type { TooltipPlacement } from 'antd/lib/tooltip';
export declare type CommonTipType = {
    text?: React.ReactNode;
    placement?: TooltipPlacement;
    type?: '1' | '2' | '3';
    fontSize?: number;
    style?: any;
};
declare const CommonTip: React.FC<CommonTipType>;
export default CommonTip;
