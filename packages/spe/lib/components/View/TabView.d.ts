import React from 'react';
import type { BasicViewPropsType } from './BasicView';
export declare type TabViewPropsType = BasicViewPropsType & {
    tabsConfig: Record<string, {
        tab: React.ReactNode;
        children: React.ReactNode;
    }>;
    tabWrapConfig?: Record<string, any>;
    defaultTabKey?: string;
    className?: string;
};
declare const TabView: React.FC<TabViewPropsType>;
export default TabView;
