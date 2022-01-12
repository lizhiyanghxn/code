import React from 'react';
export declare type BasicViewPropsType = {
    noHeader?: boolean;
    routers?: {
        title: React.ReactNode;
        click?: (...rest: any[]) => any;
    }[];
    headerRightElement?: React.ReactElement;
    footerActions?: React.ReactElement[];
    className?: string;
};
declare const BasicView: React.FC<BasicViewPropsType>;
export default BasicView;
