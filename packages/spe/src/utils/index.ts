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

/**
 * 防抖函数，可以决定是开头调用还是末尾调用， 在指定的时间内，只会调用一次，如果在时间间隔内又 触发了函数，则重新计算时间
 *
 * @param {Function} callback
 * @param {Number} delay
 * @param {Boolean} [atBegin] 是否头部调用, 默认为 false
 * @returns {Function} A new, debounced function.
 */
export function debounce(callback: Function, delay: number, atBegin = false) {
  if (typeof callback !== 'function') {
    throw new Error('callback must be function.');
  }

  let lastExec = 0;
  let timeId: any = -1;
  let canceled = false;

  function clearExistingTimeout() {
    if (timeId >= 0) {
      clearTimeout(timeId);
    }
  }

  function wrapper(...args: any[]) {
    const self: any = this;
    const intervalTime = Date.now() - lastExec;

    if (canceled) {
      return;
    }

    clearExistingTimeout();

    if (atBegin && intervalTime > delay) {
      exec();
      return;
    }
    // 使用 setTimeout 延迟执行函数
    timeId = setTimeout(exec, delay);

    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
  }

  wrapper.cancel = function cancel() {
    clearExistingTimeout();
    canceled = true;
  };

  return wrapper;
}
