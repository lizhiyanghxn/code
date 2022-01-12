import React from 'react';
import type { BasicViewPropsType } from './BasicView';
export declare type StepViewPropsType = BasicViewPropsType & {
    currentStep: number;
    stepsConfig: (string | React.ReactElement)[];
    className?: string;
    scrollRef?: React.RefObject<HTMLDivElement>;
};
declare const StepView: React.FC<StepViewPropsType>;
export default StepView;
