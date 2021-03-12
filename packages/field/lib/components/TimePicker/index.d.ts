import React from 'react';
import type { ProFieldFC } from '../../index';
/**
 * 时间区间选择
 *
 * @param param0
 * @param ref
 */
declare const FieldTimeRangePicker: ProFieldFC<{
    text: React.ReactText[];
    format: string;
}>;
export { FieldTimeRangePicker };
declare const _default: React.ForwardRefExoticComponent<import("@dcp-fe/dcp-provider").BaseProFieldFC & import("@dcp-fe/dcp-provider").ProRenderFieldPropsType & {
    text: string | number;
    format: string;
} & React.RefAttributes<any>>;
export default _default;
