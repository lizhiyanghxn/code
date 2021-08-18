import React from 'react';
export declare type FieldDigitProps = {
    text: number;
};
/**
 * 格式化秒
 *
 * @param result
 * @returns {string}
 */
export declare function formatSecond(result: number): string;
declare const _default: React.ForwardRefExoticComponent<import("@dcp-fe/dcp-provider").BaseProFieldFC & import("@dcp-fe/dcp-provider").ProRenderFieldPropsType & FieldDigitProps & React.RefAttributes<any>>;
export default _default;
