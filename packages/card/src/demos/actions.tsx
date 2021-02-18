import React from 'react';
import ProCard from '@dcp-fe/dcp-card';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <ProCard
        title="Actions 操作项"
        style={{ width: 300 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
    </>
  );
};
