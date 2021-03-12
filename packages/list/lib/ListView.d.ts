import React from 'react';
import type { ListProps, TableProps } from 'antd';
import type { GetRowKey } from 'antd/lib/table/interface';
import type { ActionType } from 'dcp-table';
declare type AntdListProps<RecordType> = Omit<ListProps<RecordType>, 'rowKey'>;
export declare type ListViewProps<RecordType> = AntdListProps<RecordType> & Pick<TableProps<RecordType>, 'columns' | 'dataSource' | 'expandable'> & {
    rowKey?: string | GetRowKey<RecordType>;
    showActions?: 'hover' | 'always';
    rowSelection?: TableProps<RecordType>['rowSelection'];
    prefixCls: string;
    dataSource: readonly RecordType[];
    actionRef: React.MutableRefObject<ActionType | undefined>;
};
declare function ListView<RecordType>(props: ListViewProps<RecordType>): JSX.Element;
export default ListView;
