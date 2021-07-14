import React, { useState } from 'react';
import { Button } from 'antd';
import Logger from '../index';

const loggerConfig = {
  showDownLoad: true,
  hasLoadedData: false,
  title: '日志标题',
  downLoadText: '下载',
  logEmptyMsg: '暂无日志',
};

const logs = [
  { date: '2021-07-14 16:05:59', message: '日志正文' },
  { date: '2021-07-14 16:05:59', message: '日志第二行' },
];

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(!visible)}>
        展开日志
      </Button>
      <Logger
        {...loggerConfig}
        logs={logs}
        show={visible}
        showRefresh={true}
        hasMore={false}
        showLoading={false}
        onLoadMore={() => {}}
        onClose={() => setVisible(false)}
        onDownload={() => {}}
      />
    </div>
  );
};
