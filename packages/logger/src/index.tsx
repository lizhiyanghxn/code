import React from 'react';
import { Modal, List, Spin, Button } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

import './index.less';

type LogType = {
  date: string;
  message: string;
};

type LoggerParamsType = {
  show: boolean;
  showLoading: boolean;
  width?: number;
  hasMore: boolean;
  logs: LogType[];
  hasLoadedData: boolean;
  showRefresh: boolean;
  showDownLoad: boolean;
  onRefresh?: (...rest: any) => void;
  onLoadMore: (page: number) => void;
  onClose: (...rest: any) => void;
  onDownload?: (...rest: any) => void;
  logEmptyMsg?: string;
  title?: string;
};

export default function Logger(props: LoggerParamsType) {
  const {
    show,
    showLoading,
    width = 800,
    hasMore,
    hasLoadedData,
    logs,
    showRefresh = true,
    showDownLoad = false,
    onRefresh = () => {},
    onLoadMore = () => {},
    onClose,
    onDownload,
    logEmptyMsg = '日志为空',
    title = '日志',
  } = props;

  const emptyMsg = logs.length === 0 && hasLoadedData ? logEmptyMsg : '.';

  return (
    <>
      <Modal
        title={title}
        centered
        visible={show}
        width={width}
        closeIcon={<i className="iconfont iconguanbi11" />}
        onCancel={onClose}
        footer={null}
      >
        {showRefresh && (
          <div className="refresh-row" onClick={onRefresh}>
            <i className="iconfont iconzhongzhi1" />
          </div>
        )}
        <div className="log-area scroll-small">
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={!showLoading && hasMore}
            useWindow={false}
          >
            <List
              dataSource={logs}
              locale={{ emptyText: emptyMsg }}
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
          {showLoading && hasMore && (
            <div className="loading-container">
              <Spin />
            </div>
          )}
        </div>
        {showDownLoad && (
          <div className="bottom-area">
            <Button type="link" size="small" className="btn-link-custom" onClick={onDownload}>
              下载日志
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
}
