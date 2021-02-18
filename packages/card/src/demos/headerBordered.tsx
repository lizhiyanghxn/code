import React from 'react';
import ProCard from '@dcp-fe/dcp-card';

export default () => {
  return (
    <ProCard title="标题" extra="extra" tooltip="这是提示" style={{ width: 300 }} headerBordered>
      内容
    </ProCard>
  );
};
