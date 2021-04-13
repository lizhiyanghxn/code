import React from 'react';
import type { CheckboxGroupProps } from 'antd/lib/checkbox';
import './index.less';
import type { FieldSelectProps } from '../Select';
export declare type GroupProps = {
    layout?: 'horizontal' | 'vertical';
    options?: CheckboxGroupProps['options'];
} & FieldSelectProps;
declare const _default: React.ForwardRefExoticComponent<import("@dcp-fe/dcp-provider").BaseProFieldFC & import("@dcp-fe/dcp-provider").ProRenderFieldPropsType & {
    layout?: "horizontal" | "vertical" | undefined;
    options?: (string | import("antd").CheckboxOptionType)[] | undefined;
} & FieldSelectProps & React.RefAttributes<any>>;
export default _default;