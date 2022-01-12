import React from 'react';
import type { BasicViewPropsType } from './BasicView';
export declare type DetailViewPropsType = BasicViewPropsType & {
    leftAttrData: {
        title: React.ReactNode;
        values: {
            attr: React.ReactNode;
            value: React.ReactNode;
        }[];
    }[];
    rightPart: React.ReactElement;
    className?: string;
};
declare const DetailView: React.FC<DetailViewPropsType>;
export default DetailView;
