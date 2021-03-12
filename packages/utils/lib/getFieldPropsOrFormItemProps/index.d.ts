import type { FormInstance } from 'antd';
/**
 * 因为 fieldProps 支持了 function 所以新增了这个方法
 *
 * @param fieldProps
 * @param form
 */
declare const getFieldPropsOrFormItemProps: (fieldProps: any, form?: FormInstance<any> | null | undefined, extraProps?: any) => Record<string, any> & {
    onChange: any;
    colSize: number;
};
export default getFieldPropsOrFormItemProps;
