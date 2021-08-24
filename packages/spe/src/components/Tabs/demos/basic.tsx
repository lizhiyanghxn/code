import React, { useState } from 'react';
import { Tabs } from '../../../index';

export default () => {
  const [active, setActive] = useState(2);
  const onTabChange = (index: number) => {
    console.log('current index is', index);
    setActive(index);
  };
  const tabsConfig = ['页签一', '页签二', '页签三'];
  return (
    <>
      <Tabs
        defaultActive={2}
        tabsConfig={tabsConfig}
        onTabChange={onTabChange}
        style={{ margin: 24 }}
      />
      {active === 0 ? <div style={{ margin: 24 }}>页签一</div> : null}
      {active === 1 ? <div style={{ margin: 24 }}>页签二</div> : null}
      {active === 2 ? <div style={{ margin: 24 }}>页签三</div> : null}
    </>
  );
};
