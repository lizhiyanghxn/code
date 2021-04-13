import './index.less';
declare type LogType = {
    date: string;
    message: string;
};
declare type LoggerParamsType = {
    show: boolean;
    showLoading: boolean;
    width?: number;
    hasMore: boolean;
    logs: LogType[];
    hasLoadedData: boolean;
    showRefresh: boolean;
    showDownLoad: boolean;
    onRefresh?: (...rest: any) => void;
    onLoadMore: (page: number) => void;
    onClose: (...rest: any) => void;
    onDownload?: (...rest: any) => void;
    logEmptyMsg?: string;
    title?: string;
};
export default function Logger(props: LoggerParamsType): JSX.Element;
export {};
