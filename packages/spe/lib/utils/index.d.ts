export declare const isArray: (data: any) => boolean;
export declare const isObject: (data: any) => boolean;
export declare const isFunc: (data: any) => boolean;
export declare const notEmpty: (value: any) => boolean;
export declare const isFalsy: (value: any) => boolean;
export declare const getSlotContent: (children: any, slotName: string) => any;
/**
 * 防抖函数，可以决定是开头调用还是末尾调用， 在指定的时间内，只会调用一次，如果在时间间隔内又 触发了函数，则重新计算时间
 *
 * @param {Function} callback
 * @param {Number} delay
 * @param {Boolean} [atBegin] 是否头部调用, 默认为 false
 * @returns {Function} A new, debounced function.
 */
export declare function debounce(callback: Function, delay: number, atBegin?: boolean): {
    (...args: any[]): void;
    cancel(): void;
};
