import React from 'react';
import type { ProFieldEmptyText } from 'dcp-field';
import type { ProSchemaComponentTypes } from 'dcp-utils';
import type { ProColumnType } from './index';
/**
 * 拼接用于编辑的 key
 *
 * @param base 基本的 key
 * @param dataIndex 需要拼接的key
 */
export declare const spellNamePath: (base: React.Key, dataIndex: React.Key | React.Key[]) => React.Key[] | React.Key | undefined;
/**
 * 根据不同的类型来转化数值
 *
 * @param text
 * @param valueType
 */
declare function defaultRenderText<T>(config: {
    text: string | number | React.ReactText[];
    valueType: ProColumnType['valueType'];
    index: number;
    rowData?: T;
    columnEmptyText?: ProFieldEmptyText;
    columnProps?: ProColumnType<T>;
    type?: ProSchemaComponentTypes;
    recordKey?: React.Key;
    mode: 'edit' | 'read';
}): React.ReactNode;
export default defaultRenderText;