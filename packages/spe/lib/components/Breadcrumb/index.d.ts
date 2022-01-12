import React from 'react';
import type { HTMLAttributes } from 'react';
interface IRouterListItem {
    title: React.ReactNode;
    click?: () => void;
}
export declare type BreadcrumbPropsType = HTMLAttributes<HTMLDivElement> & {
    routersList?: IRouterListItem[];
};
declare const Breadcrumb: React.FC<BreadcrumbPropsType>;
export default Breadcrumb;
