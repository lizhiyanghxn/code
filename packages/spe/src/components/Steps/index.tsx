import React from 'react';
import cs from 'classnames';
import './index.scss';

export type StepsPropsType = {
  currentStep?: number; // 当前步
  stepsConfig?: string[]; // 步骤配置 ['第一步', '第二步']
  modal?: boolean; // 步骤条是否在弹框中使用,默认为是
  isCenter?: boolean;
};

const Steps: React.FC<StepsPropsType> = (props) => {
  const { modal = true, stepsConfig = [], currentStep = 1, isCenter = false } = props;
  return (
    <div className={cs('model-steps', { 'is-page': !modal })}>
      <ul className={cs({ 'flex-center': isCenter })}>
        {stepsConfig.map((item, index) => (
          <li
            key={index}
            className={cs(
              { 'completed-step': currentStep > index + 1 },
              { 'current-step': currentStep === index + 1 },
            )}
          >
            <span className="ms-serial-number">{index + 1}</span>
            <span className="ms-name">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Steps;
