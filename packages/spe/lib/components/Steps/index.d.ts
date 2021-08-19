import React from 'react';
import type { HTMLAttributes } from 'react';
import './index.scss';
export declare type StepsPropsType = HTMLAttributes<HTMLDivElement> & {
    currentStep?: number;
    stepsConfig?: string[];
    usage?: string;
    isCenter?: boolean;
};
declare const Steps: React.FC<StepsPropsType>;
export default Steps;
