import React from 'react';
import type { HTMLAttributes } from 'react';
import './index.scss';
export declare type TabsPropsType = HTMLAttributes<HTMLDivElement> & {
    defaultActive?: number;
    tabsConfig?: string[];
    onTabChange?: (index: number) => void;
};
declare const Tabs: React.FC<TabsPropsType>;
export default Tabs;
