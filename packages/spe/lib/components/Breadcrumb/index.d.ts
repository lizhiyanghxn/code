import React from 'react';
import type { HTMLAttributes } from 'react';
import './index.scss';
interface IRouterListItem {
    title: string;
    click?: () => void;
}
export declare type BreadcrumbPropsType = HTMLAttributes<HTMLDivElement> & {
    routersList?: IRouterListItem[];
};
declare const Breadcrumb: React.FC<BreadcrumbPropsType>;
export default Breadcrumb;
