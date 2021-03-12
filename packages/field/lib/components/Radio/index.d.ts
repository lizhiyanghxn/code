import React from 'react';
import type { RadioGroupProps } from 'antd';
import './index.less';
import type { FieldSelectProps } from '../Select';
export declare type GroupProps = {
    options?: RadioGroupProps['options'];
    radioType?: 'button' | 'radio';
} & FieldSelectProps;
declare const _default: React.ForwardRefExoticComponent<import("@dcp-fe/dcp-provider").BaseProFieldFC & import("@dcp-fe/dcp-provider").ProRenderFieldPropsType & {
    options?: (string | import("antd").CheckboxOptionType)[] | undefined;
    radioType?: "button" | "radio" | undefined;
} & FieldSelectProps & React.RefAttributes<any>>;
export default _default;
