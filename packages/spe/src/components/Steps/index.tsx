import React from 'react';
import type { HTMLAttributes } from 'react';
import cs from 'classnames';

export type StepsPropsType = HTMLAttributes<HTMLDivElement> & {
  currentStep?: number; // 当前步
  stepsConfig?: (string | React.ReactElement)[]; // 步骤配置 ['第一步', ReactElement]
  usage?: string; // 步骤条在哪个地方使用，目前有页面和弹框两个地方，会影响样式表现
  isCenter?: boolean; // 是否居中
};

const Steps: React.FC<StepsPropsType> = (props) => {
  const { usage = 'modal', stepsConfig = [], currentStep = 1, isCenter = false } = props;

  const stepInPage = (): boolean => usage === 'page';

  return (
    <div className={cs('model-steps', { 'is-page': stepInPage() })}>
      <ul className={cs({ 'flex-center': isCenter })}>
        {stepsConfig.map((item: string | React.ReactElement, index: number) => (
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
