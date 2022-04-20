import React, { Component } from 'react';
import PropTypes from 'prop-types';
export declare type EchartsType = {
    initOpts: any;
    height?: string;
    width?: string;
    option: any;
    resize?: boolean;
    tooltipConfig?: {
        msg: string;
        left: string;
    };
    className?: string;
    onlegendselectchanged?: (...p: any) => any;
    setChartInstance?: (...p: any) => any;
    clear?: (...p: any) => any;
};
declare class Echarts extends Component<EchartsType, {
    chartInstance: any;
    option: any;
}, any> {
    constructor(props: EchartsType);
    static propTypes: {
        initOpts: PropTypes.Requireable<any>;
        height: PropTypes.Requireable<string>;
        width: PropTypes.Requireable<string>;
        option: PropTypes.Requireable<object>;
        resize: PropTypes.Requireable<boolean>;
        onlegendselectchanged: PropTypes.Requireable<(...args: any[]) => any>;
        setChartInstance: PropTypes.Requireable<(...args: any[]) => any>;
        clear: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        initOpts: {};
        height: string;
        width: string;
        option: {};
        resize: boolean;
        setChartInstance: () => void;
        clear: () => void;
    };
    instance: React.RefObject<any>;
    componentDidMount(): void;
    clearAndReset: (option?: {}) => void;
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default Echarts;
