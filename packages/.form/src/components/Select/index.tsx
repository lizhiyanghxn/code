import React from 'react';
import type { SelectProps } from 'antd';
import ProField from '@dcp-fe/dcp-field';
import type { ProSchema } from '@dcp-fe/dcp-utils';
import { runFunction } from '@dcp-fe/dcp-utils';
import type { ProFormItemProps } from '../../interface';
import createField from '../../BaseForm/createField';

export type ProFormSelectProps = ProFormItemProps<SelectProps<any>> & {
  valueEnum?: ProSchema['valueEnum'];
  request?: ProSchema['request'];
  options?: SelectProps<any>['options'];
  mode?: SelectProps<any>['mode'];
  showSearch?: SelectProps<any>['showSearch'];
};

/**
 * 文本选择组件
 *
 * @param
 */
const ProFormSelect = React.forwardRef<any, ProFormSelectProps>(
  ({ fieldProps, children, proFieldProps, mode, valueEnum, request, showSearch, options }, ref) => {
    return (
      <ProField
        mode="edit"
        valueEnum={runFunction(valueEnum)}
        request={request}
        valueType="select"
        fieldProps={{
          options,
          mode,
          showSearch,
          ...fieldProps,
        }}
        ref={ref}
        {...proFieldProps}
      >
        {children}
      </ProField>
    );
  },
);

export default createField<ProFormSelectProps>(ProFormSelect, {
  customLightMode: true,
});
