import React, { Component } from 'react';
export { getLabels } from './common';
export declare const constant: {
    annotationColor: string;
    trainColor: string;
};
export declare const formatInitResult: (resResult: string, fitlerFn?: (result: any) => boolean, annotationColor?: string, trainColor?: string) => any[];
declare class AnnotationCanvas extends Component<any> {
    canvasRef: React.RefObject<any>;
    toolInstance: any;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(preProps: any): void;
    drawOriginalImage: (currentIndex?: any) => Promise<void>;
    render(): JSX.Element;
}
export default AnnotationCanvas;
