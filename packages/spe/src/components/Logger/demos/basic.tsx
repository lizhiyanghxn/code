import React, { useState } from 'react';
import { Button } from 'antd';
import Logger from '../index';

const loggerConfig = {
  showDownLoad: true,
  hasLoadedData: false,
  title: '日志',
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
        logTabs={[
          {
            title: '数据格式转换',
            key: 'key1',
            active: true,
            processList: [
              { label: 'Jack', value: 'Jack' },
              { label: 'Jack2', value: 'Jack2' },
            ],
            processId: 'jack',
            logs: logs,
            emptyMsg: '',
            showLoading: false,
          },
          {
            title: '测试',
            key: 'key2',
            active: false,
            processList: [
              { label: 'Jack', value: 'Jack' },
              { label: 'Jack2', value: 'Jack2' },
            ],
            processId: 'Jack2',
            logs: logs,
            emptyMsg: '',
            showLoading: false,
          },
        ]}
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
