import React from 'react';
import CommonTip from '../index';

export default () => {
  const itemStyle = {
    padding: '10px 20px',
  };
  return (
    <>
      <div style={itemStyle}>
        默认icon为问号：
        <CommonTip text="默认icon为问号" />
      </div>
      <div style={itemStyle}>
        icon为感叹号：
        <CommonTip text="icon为感叹号" type="2" />
      </div>
      <div style={itemStyle}>
        icon为更多：
        <CommonTip
          text={
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600 }}>可以是jsx</h3>
              <section style={{ fontSize: '14px', padding: '10px' }}>
                CommonTip 是SPE风格的通用文案提示组件
              </section>
            </div>
          }
          type="3"
        />
      </div>
    </>
  );
};
