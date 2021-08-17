import React from 'react';
import { Steps } from '../../../index';

export default () => (
  <Steps
    currentStep={1}
    stepsConfig={['第一步', '第二步', '第三步']}
    modal={false}
    isCenter={true}
  />
);
