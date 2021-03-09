import React from 'react';
import ProSkeleton from '@dcp-fe/dcp-skeleton';

export default () => (
  <div
    style={{
      background: '#fafafa',
      padding: 24,
    }}
  >
    <ProSkeleton type="list" />
  </div>
);