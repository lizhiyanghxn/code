import React from 'react';
import Steps from '../Steps';
import BasicView from './BasicView';
import cs from 'classnames';
import type { BasicViewPropsType } from './BasicView';

/*
 * StepView
 * 继承于 BasicView, 配置 stepsConfig
 * 面包屑导航 + (Step + 内容居中) + 页脚按钮
 * 使用场景：步骤页布局
 */

export type StepViewPropsType = BasicViewPropsType & {
  currentStep: number;
  stepsConfig: (string | React.ReactElement)[]; // ['第一步', '第二步']
  className?: string;
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const StepView: React.FC<StepViewPropsType> = (props) => {
  const { currentStep = 1, stepsConfig = [], scrollRef, children, ...rest } = props;
  return (
    <BasicView {...rest} className={cs([rest.className, 'step-view'])}>
      {stepsConfig.length > 0 ? (
        <Steps currentStep={currentStep} stepsConfig={stepsConfig} usage="page" />
      ) : (
        <></>
      )}
      <div className="stepview-scorll-container" ref={scrollRef}>
        {children}
      </div>
    </BasicView>
  );
};

export default StepView;
