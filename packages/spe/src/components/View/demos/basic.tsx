import React from 'react';
import { Button } from 'antd';
import { BasicView } from '../../../index';

import './pageBox.scss';

export default () => {
  const headerRightEle = <Button>操作按钮</Button>;

  return (
    <BasicView
      routers={[{ title: 'Title1' }, { title: 'Title2' }]}
      headerRightElement={headerRightEle}
      footerActions={[headerRightEle]}
    >
      <div style={{ padding: '100px' }}>内容区域</div>
    </BasicView>
  );
};
