import React from 'react';
import { Tabs } from '../../../index';

export default () => {
  return (
    <>
      <Tabs
        defaultActive={1}
        tabsConfig={['页签一', '页签二', '页签三']}
        onTabChange={(index) => {
          console.log('current index is', index);
        }}
        style={{ margin: 24 }}
      />
    </>
  );
};
