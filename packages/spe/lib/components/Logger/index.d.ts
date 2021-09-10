import React from 'react';
import './index.less';
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
    logs: LogType[];
};
export declare type LoggerParamsType = {
    show: boolean;
    showInit: boolean | string;
    initialLogTabs: logTab[];
    gpuPodNumber: number;
    initialActiveKey: string;
    logApi: (params: any) => Promise<any>;
    onDownload: () => void;
    onClose: (status: boolean) => void;
    getProcessLabel: (id: number) => string;
    showRefresh?: boolean;
    showDownLoad?: boolean;
    width?: number;
    title: string;
    downLoadText: string;
    confirmText: string;
    logEmptyMsg: string;
};
export declare const Logger: React.FC<LoggerParamsType>;
export {};
