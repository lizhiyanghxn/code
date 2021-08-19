import React, { useState } from 'react';
import { Switch } from 'antd';
import { Steps } from '../../../index';

export default () => {
  const [isCenter, setIsCenter] = useState(false);
  return (
    <>
      <Steps
        currentStep={2}
        stepsConfig={['第一步', '第二步', '第三步']}
        usage="page"
        isCenter={isCenter}
      />
      <div
        style={{
          margin: '24px',
          textAlign: 'center',
        }}
      >
        切换是否居中: <Switch onChange={() => setIsCenter(!isCenter)} />
      </div>
    </>
  );
};
