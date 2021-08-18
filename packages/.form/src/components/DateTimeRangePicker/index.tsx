import React from 'react';
import ProField from '@dcp-fe/dcp-field';
import type { DatePickerProps } from 'antd';
import { dateArrayFormatter } from '@dcp-fe/dcp-utils';

import type { ProFormItemProps } from '../../interface';
import createField from '../../BaseForm/createField';

const valueType = 'dateTimeRange';

/**
 * 日期时间区间选择组件
 *
 * @param
 */
const ProFormDateTimeRangePicker: React.FC<
  ProFormItemProps<DatePickerProps>
> = React.forwardRef(({ fieldProps, proFieldProps }, ref) => (
  <ProField
    ref={ref}
    text={fieldProps?.value}
    mode="edit"
    fieldProps={fieldProps}
    valueType={valueType}
    {...proFieldProps}
  />
));

export default createField<ProFormItemProps<DatePickerProps>>(ProFormDateTimeRangePicker, {
  valueType,
  lightFilterLabelFormatter: (value) => dateArrayFormatter(value, 'YYYY-MM-DD HH:mm:ss'),
});
