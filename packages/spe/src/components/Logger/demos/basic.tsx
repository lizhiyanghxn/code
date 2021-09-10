import React, { useState } from 'react';
import { Button } from 'antd';
import Logger from '../index';

const getProcessLabel = (id: number) => `进程${id}`;

const initialLogTabs = [
  {
    title: '数据格式转换',
    activeTitle: '数据格式转换(当前)',
    defaultTitle: '数据格式转换',
    key: 'dataconverter',
    processList: [{ label: getProcessLabel(0), value: 0 }],
    logs: [],
  },
  {
    title: '测试',
    activeTitle: '测试(当前)',
    defaultTitle: '测试',
    key: 'test',
    processList: [{ label: getProcessLabel(0), value: 0 }],
    logs: [],
  },
];

export default () => {
  const [show, setShow] = useState(false);

  const testId = '123';

  const getTestLogs = (testId: string, params: any) =>
    new Promise((resolve) => {
      console.log('params', params);
      setTimeout(() => {
        if (params.page >= 4 || params.page <= 0) {
          resolve({
            list: [],
            total: 60,
          });
        }
        const list = [];
        for (let i = 0; i < 20; i++) {
          list[i] = {
            date: `2021/09/01 13:59:${i}`,
            message:
              '[359.718.0.0.out] Begin analyzing results [359.718.0.0.out] Begin analyzing results[359.718.0.0.out] Begin analyzing results',
          };
        }
        resolve({
          list,
          total: 60,
        });
      }, 500);
    });

  return (
    <div>
      <Button type="primary" onClick={() => setShow(!show)}>
        展开日志
      </Button>
      <Logger
        show={show}
        showInit={show && testId}
        initialLogTabs={initialLogTabs}
        gpuPodNumber={4}
        initialActiveKey="dataconverter"
        logApi={(params = {}) => getTestLogs(testId, params)}
        onDownload={() => alert('下载中...')}
        onClose={(e) => setShow(e)}
        getProcessLabel={getProcessLabel}
        showDownLoad
        title="日志"
        downLoadText="下载日志"
        confirmText="确认"
        logEmptyMsg="该任务日志为空"
      />
    </div>
  );
};
