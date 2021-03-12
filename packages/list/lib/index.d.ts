import React from 'react';
import type { ListProps } from 'antd';
import type { ProTableProps, ProColumnType } from 'dcp-table';
import type { ParamsType } from 'dcp-provider';
import './index.less';
declare type AntdListProps<RecordType> = Omit<ListProps<RecordType>, 'rowKey'>;
declare type ProListMeta<T> = Pick<ProColumnType<T>, 'dataIndex' | 'valueType' | 'render' | 'search' | 'title' | 'valueEnum'>;
export declare type ProListMetas<T> = {
    type?: ProListMeta<T>;
    title?: ProListMeta<T>;
    subTitle?: ProListMeta<T>;
    description?: ProListMeta<T>;
    avatar?: ProListMeta<T>;
    extra?: ProListMeta<T>;
    content?: ProListMeta<T>;
    actions?: ProListMeta<T>;
    [key: string]: ProListMeta<T> | undefined;
};
export declare type ProListProps<RecordType, U extends ParamsType> = Omit<ProTableProps<RecordType, U>, 'size'> & AntdListProps<RecordType> & {
    metas?: ProListMetas<RecordType>;
    showActions?: 'hover' | 'always';
};
export declare type Key = React.Key;
export declare type TriggerEventHandler<RecordType> = (record: RecordType) => void;
declare function ProList<RecordType extends Record<string, any>, U extends Record<string, any> = Record<string, any>>(props: ProListProps<RecordType, U>): JSX.Element;
export default ProList;
