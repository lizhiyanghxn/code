import React from 'react';
import './index.scss';
export declare type ImageAnalysisType = {
    className: string;
    total: number;
    currentIndex: number;
    searchParams: {
        page: number;
        page_size: number;
    };
    loading?: boolean;
    canvasSlotRef: React.RefObject<any>;
    canvasSlotRef2?: React.RefObject<any>;
    setSwiperModalShow: (bool: boolean) => void;
    setClientSize: (size: {
        width: number;
        height: number;
    }) => void;
    setCurrentIndex: (index: number) => void;
    getSwiperImages: (params: {
        page: number;
        page_size: number;
    }) => Promise<any>;
    MainSlot: React.FC<any>;
    RightInfoSlot?: React.FC<any>;
    BottomControlSlot?: React.FC<any>;
    TopTipsSlot?: React.FC<any>;
};
declare const ImageAnalysis: React.FC<ImageAnalysisType>;
export default ImageAnalysis;
