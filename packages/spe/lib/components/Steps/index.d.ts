import React from 'react';
import type { HTMLAttributes } from 'react';
export declare type StepsPropsType = HTMLAttributes<HTMLDivElement> & {
    currentStep?: number;
    stepsConfig?: (string | React.ReactElement)[];
    usage?: string;
    isCenter?: boolean;
};
declare const Steps: React.FC<StepsPropsType>;
export default Steps;
