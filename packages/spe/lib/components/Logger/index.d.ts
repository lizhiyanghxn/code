import React from 'react';
declare type LogType = {
    date: string;
    message: string;
};
declare type logTab = {
    title: string;
    activeTitle: string;
    defaultTitle: string;
    key: string;
    processList: any[];
    gpuPodNumber?: number;
    logs: LogType[];
};
export declare type LoggerParamsType = {
    show: boolean;
    showInit: boolean | string;
    isPageMode: boolean;
    initialLogTabs: logTab[];
    subTaskIds?: number[];
    initialActiveKey: string;
    logApi: (params: any, extraConfig?: any) => Promise<any>;
    onDownload: () => void;
    onClose: (status: boolean) => void;
    getSubTaskLabel?: (id: number) => string;
    getProcessLabel?: (id: number) => string;
    showRefresh?: boolean;
    showDownLoad?: boolean;
    showProcessSelect?: boolean;
    width?: number;
    title: string;
    downLoadText: string;
    confirmText: string;
    logEmptyMsg: string;
    className?: string;
};
declare const Logger: React.FC<LoggerParamsType>;
export default Logger;
