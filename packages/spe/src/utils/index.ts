import type { ReactElement } from 'react';

export const isArray = (data: any) => Object.prototype.toString.call(data) === '[object Array]';
export const isObject = (data: any) => Object.prototype.toString.call(data) === '[object Object]';
export const isFunc = (data: any) => Object.prototype.toString.call(data) === '[object Function]';
export const notEmpty = (value: any) => value !== undefined && value !== null && value !== '';
export const isFalsy = (value: any) => (value === 0 || value === '0' ? false : !value);

export const getSlotContent = (children: any, slotName: string) => {
  if (!children) {
    return null;
  }
  if (isArray(children)) {
    return children.filter((item: ReactElement) => item.props.slot === slotName);
  }
  if (isObject(children)) {
    return children.props.slot === slotName ? children : null;
  }
  return null;
};
