import React, { useState } from 'react';
import { Button } from 'antd';
import Logger from '../index';

export default () => {
  const [visible, setVisible] = useState(false);

  const logs = [
    { date: '2021-07-14 16:05:59', message: '日志正文' },
    { date: '2021-07-14 16:05:59', message: '日志第二行' },
  ];
  const logTabs = [
    {
      title: '数据格式转换',
      key: 'tabKey1',
      active: false,
      processList: [
        { label: '类型1', value: 'type' },
        { label: '类型2', value: 'type2' },
      ],
      processId: 'type',
      logs,
      emptyMsg: '',
      showLoading: false,
    },
    {
      title: '测试',
      key: 'tabKey2',
      active: true,
      processList: [
        { label: '测试类型1', value: 'testType' },
        { label: '测试类型2', value: 'testType2' },
      ],
      processId: 'testType2',
      logs,
      emptyMsg: '',
      showLoading: false,
    },
  ];
  const onRefresh = (tabPaneKey: string, selectValue: string) => {
    console.warn('tab的key', tabPaneKey, '下拉框的value', selectValue);
  };
  const onDownload = () => {
    console.warn('这是下载事件');
  };

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(!visible)}>
        展开日志
      </Button>
      <Logger
        logTabs={logTabs}
        show={visible}
        width={600}
        title={'这里是日志组件弹框标题'}
        downLoadText={'下载按钮文字'}
        showRefresh={true}
        hasMore={false}
        showLoading={false}
        onLoadMore={() => {}}
        onClose={() => setVisible(false)}
        onDownload={onDownload}
        onRefresh={onRefresh}
      />
    </div>
  );
};
