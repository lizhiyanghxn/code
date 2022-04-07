import React, { useState } from 'react';
import { Button } from 'antd';
import { BasicView } from '../index';

import './pageBox.scss';

export default () => {
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  const headerRightEle = <Button onClick={onClick}>操作按钮</Button>;

  return (
    <BasicView
      routers={[{ title: 'Title1' }, { title: 'Title2' }]}
      headerRightElement={headerRightEle}
      footerActions={[headerRightEle]}
      spinning={loading}
    >
      <div style={{ padding: '100px' }}>内容区域</div>
    </BasicView>
  );
};
