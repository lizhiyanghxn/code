import React from 'react';
import EllipsisTip from '../index';

export default () => (
  <div style={{ padding: '20px' }}>
    <EllipsisTip title="文本超出了子节点的占位，提醒一下" placement="bottomLeft">
      <div
        style={{
          width: '400px',
          padding: '10px',
          backgroundColor: '#ff0000',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        一段超长的文本，一段超长的文本，一段超长的文本，一段超长的文本，一段超长的文本，一段超长的文本，一段超长的文本，一段超长的文本。
      </div>
    </EllipsisTip>
    <EllipsisTip title="文本超出了子节点的占位，提醒一下" placement="bottomLeft">
      <div
        style={{
          width: '400px',
          padding: '10px',
          backgroundColor: '#ccc',
          marginTop: '20px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        没有超出，不提示
      </div>
    </EllipsisTip>
  </div>
);
