import React from 'react';
import './index.less';
export declare type ProCardActionsProps = {
    /**
     * 自定义前缀
     *
     * @ignore
     */
    prefixCls?: string;
    /** 操作按钮 */
    actions?: React.ReactNode[];
};
declare const ProCardActions: React.FC<ProCardActionsProps>;
export default ProCardActions;