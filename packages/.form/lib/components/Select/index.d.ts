import React from 'react';
import type { SelectProps } from 'antd';
import type { ProSchema } from '@dcp-fe/dcp-utils';
import type { ProFormItemProps } from '../../interface';
export declare type ProFormSelectProps = ProFormItemProps<SelectProps<any>> & {
    valueEnum?: ProSchema['valueEnum'];
    request?: ProSchema['request'];
    options?: SelectProps<any>['options'];
    mode?: SelectProps<any>['mode'];
    showSearch?: SelectProps<any>['showSearch'];
};
declare const _default: React.ComponentType<Pick<{
    fieldProps?: (import("../../interface").FieldProps & SelectProps<any>) | undefined;
    placeholder?: string | string[] | undefined;
    secondary?: boolean | undefined;
    allowClear?: boolean | undefined;
    disabled?: boolean | undefined;
    width?: number | "sm" | "md" | "xl" | "xs" | "lg" | undefined;
    proFieldProps?: {
        light?: boolean | undefined;
        label?: React.ReactNode;
        mode?: "read" | undefined;
    } | undefined;
} & import("antd").FormItemProps<any> & {
    valueEnum?: Record<string, string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | import("@dcp-fe/dcp-utils/lib/typing").ProSchemaValueEnumType | null | undefined> | import("@dcp-fe/dcp-utils").ProSchemaValueEnumMap | ((row: unknown) => Record<string, string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | import("@dcp-fe/dcp-utils/lib/typing").ProSchemaValueEnumType | null | undefined> | import("@dcp-fe/dcp-utils").ProSchemaValueEnumMap) | undefined;
    request?: import("@dcp-fe/dcp-utils").ProFieldRequestData<any> | undefined;
    options?: import("rc-select/lib/interface").OptionsType | undefined;
    mode?: "multiple" | "tags" | undefined;
    showSearch?: boolean | undefined;
} & import("../../BaseForm/createField").ExtendsProps, "children" | "label" | "style" | "valuePropName" | "id" | "disabled" | "className" | "placeholder" | "bordered" | "prefixCls" | "name" | "rules" | "initialValue" | "hidden" | "onReset" | "tooltip" | "dependencies" | "getValueFromEvent" | "normalize" | "shouldUpdate" | "trigger" | "validateTrigger" | "validateFirst" | "getValueProps" | "messageVariables" | "preserve" | "isListField" | "isList" | "required" | "width" | "htmlFor" | "secondary" | "allowClear" | "colSize" | "params" | "ignoreFormItem" | "readonly" | "transform" | "formItemProps" | "fieldProps" | "noStyle" | "hasFeedback" | "validateStatus" | "fieldKey" | "colon" | "labelAlign" | "labelCol" | "requiredMark" | "wrapperCol" | "help" | "extra" | "status" | "mode" | "valueEnum" | "options" | "request" | "showSearch">>;
export default _default;
