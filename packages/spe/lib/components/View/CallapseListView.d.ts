import React from 'react';
import type { BasicViewPropsType } from './BasicView';
import './DetailView.scss';
interface AttrSections {
    title: any;
    values: AttrItem[];
}
interface AttrItem {
    attr: any;
    value: any;
}
export declare type DetailViewPropsType = BasicViewPropsType & {
    attrData?: AttrSections[];
    rightCustomize?: React.ReactElement;
};
declare const DetailView: React.FC<DetailViewPropsType>;
export default DetailView;
