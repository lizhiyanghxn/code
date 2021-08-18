import React from 'react';
import './index.less';
declare const _default: React.ForwardRefExoticComponent<import("@dcp-fe/dcp-provider").BaseProFieldFC & import("@dcp-fe/dcp-provider").ProRenderFieldPropsType & {
    text: string | number;
    format: string;
    showTime?: boolean | undefined;
    bordered?: boolean | undefined;
    picker?: "time" | "date" | "week" | "month" | "quarter" | "year" | undefined;
} & React.RefAttributes<any>>;
export default _default;
