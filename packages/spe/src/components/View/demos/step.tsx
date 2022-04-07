import React, { useState } from 'react';
import { Button } from 'antd';
import { StepView } from '../index';

import './pageBox.scss';

export default () => {
  const [current, setcurrent] = useState(1);

  const headerRightEle = (
    <Button
      onClick={() => {
        if (current === 1) {
          setcurrent(2);
        } else {
          setcurrent(1);
        }
      }}
    >
      {current === 1 ? '下一步' : '返回'}
    </Button>
  );

  return (
    <StepView
      routers={[{ title: 'Title1' }, { title: 'Title2' }]}
      headerRightElement={<Button>操作按钮</Button>}
      footerActions={[headerRightEle]}
      currentStep={current}
      stepsConfig={['第一步', '第二步']}
    >
      <div style={{ padding: '100px' }}>{current === 1 ? '内容区域1' : '内容区域2'}</div>
    </StepView>
  );
};
