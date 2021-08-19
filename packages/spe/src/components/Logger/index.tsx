import React, { useEffect, useState } from 'react';
import { Modal, List, Spin, Button, Tabs, Select } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

import './index.less';

const { TabPane } = Tabs;
const { Option } = Select;

type LogType = {
  date: string;
  message: string;
};

type logTab = {
  title: string;
  key: string;
  active: boolean;
  processList: any[];
  logs: LogType[];
  emptyMsg: string;
  showLoading: boolean;
  processId: string;
};

type LoggerParamsType = {
  show: boolean;
  showLoading: boolean;
  width?: number;
  hasMore: boolean;
  logTabs: logTab[];
  hasLoadedData: boolean;
  showRefresh: boolean;
  showDownLoad: boolean;
  onRefresh?: (...rest: any) => void;
  onLoadMore: (page: number, tabKey: string, processId: string) => void;
  onClose: (...rest: any) => void;
  onDownload?: (...rest: any) => void;
  logEmptyMsg?: string;
  title?: string;
  downLoadText: string;
};

export default function Logger(props: LoggerParamsType) {
  const {
    show,
    width = 750,
    logTabs,
    showRefresh = true,
    showDownLoad = false,
    onRefresh = () => {},
    onLoadMore = () => {},
    onClose,
    onDownload,
    logEmptyMsg = '日志为空',
    title = '日志',
    downLoadText = '下载日志',
  } = props;

  const [tabKey, setTabKey] = useState('');
  const [processId, setProcessId] = useState('');

  useEffect(() => {
    if (logTabs) {
      const activeTabItem = logTabs.find((item) => item.active);
      setTabKey(activeTabItem ? activeTabItem.key : '');
    }
  }, [logTabs]);

  useEffect(() => {
    if (logTabs) {
      const tabItem = logTabs.find((item) => item.key === tabKey);
      setProcessId(tabItem ? tabItem.processId : '');
    }
  }, [logTabs, tabKey]);

  const onSelectChange = (tabKey: string, processId: string) => {
    setProcessId(processId);
    onRefresh(tabKey, processId);
  };

  return (
    <>
      <Modal
        title={title}
        centered
        visible={show}
        width={width}
        className="logger-modal"
        closeIcon={<i className="iconfont iconguanbi11" />}
        onCancel={onClose}
        footer={
          <>
            {showDownLoad && <Button onClick={onDownload}>{downLoadText}</Button>}
            <Button type="primary" onClick={onClose}>
              确定
            </Button>
          </>
        }
      >
        <Tabs activeKey={tabKey} onChange={(tabKey) => setTabKey(tabKey)}>
          {logTabs.map((logItem) => (
            <TabPane
              tab={`${logItem.title}${logItem.active ? '（进行中）' : ''}`}
              key={logItem.key}
            >
              <div className="operate-area">
                <Select
                  value={processId}
                  style={{ width: 146 }}
                  onChange={(processId) => onSelectChange(logItem.key, processId)}
                >
                  {logItem.processList.map((item) => (
                    <Option value={item.value} key={item.value}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
                {showRefresh && (
                  <div
                    className="refresh-row"
                    onClick={() => onRefresh(logItem.key, logItem.processId)}
                  >
                    <i className="iconfont iconzhongzhi1" />
                  </div>
                )}
              </div>
              <div className="log-area scroll-small">
                <InfiniteScroll
                  initialLoad={false}
                  pageStart={0}
                  loadMore={(page) => onLoadMore(page, logItem.key, logItem.processId)}
                  hasMore={!logItem.showLoading}
                  useWindow={false}
                >
                  <List
                    dataSource={logItem.logs}
                    locale={{ emptyText: logItem.emptyMsg }}
                    renderItem={(item: LogType, index) => (
                      <List.Item key={index}>
                        <div className="log">
                          <div className="log-time">{item.date}</div>
                          <div
                            className="log-content"
                            dangerouslySetInnerHTML={{ __html: item.message }}
                          />
                        </div>
                      </List.Item>
                    )}
                  />
                </InfiniteScroll>
                {logItem.showLoading && (
                  <div className="loading-container">
                    <Spin />
                  </div>
                )}
              </div>
            </TabPane>
          ))}
        </Tabs>
      </Modal>
    </>
  );
}
