import React from 'react';
import type { HTMLAttributes } from 'react';
import './index.scss';
export declare type CardPropsType = HTMLAttributes<HTMLDivElement> & {
    titleText: any;
    subTitleText?: any;
    showHead?: boolean;
    headClass?: string;
};
declare const Card: React.FC<CardPropsType>;
export default Card;
