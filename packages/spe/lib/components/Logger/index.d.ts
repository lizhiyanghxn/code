import './index.less';
declare type LogType = {
    date: string;
    message: string;
};
declare type logTab = {
    title: string;
    key: string;
    active: boolean;
    processList: any[];
    logs: LogType[];
    emptyMsg: string;
    showLoading: boolean;
    processId: string;
};
declare type LoggerParamsType = {
    show: boolean;
    showLoading: boolean;
    width?: number;
    hasMore: boolean;
    logTabs: logTab[];
    showRefresh: boolean;
    showDownLoad: boolean;
    onRefresh?: (...rest: any) => void;
    onLoadMore: (page: number, tabKey: string, processId: string) => void;
    onClose: (...rest: any) => void;
    onDownload?: (...rest: any) => void;
    title?: string;
    downLoadText: string;
};
export default function Logger(props: LoggerParamsType): JSX.Element;
export {};
