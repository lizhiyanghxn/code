import React, { useEffect, useState, useRef } from 'react';
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
  activeTitle: string;
  defaultTitle: string;
  key: string;
  processList: any[];
  logs: LogType[];
};

export type LoggerParamsType = {
  show: boolean;
  showInit: boolean | string; // 弹框打开时控制刷新日志（show 和 id等变化时触发）
  initialLogTabs: logTab[]; // 日志
  subTaskIds?: number[]; // 超参子任务数量, null或者空数组表示不是超参搜素
  gpuPodNumber: number; // 进程数量
  initialActiveKey: string; // 初始激活TAB（当前）
  logApi: (params: any) => Promise<any>; // 获取LOG的API接口，path参数请预先传入，组件内只传params参数
  onDownload: () => void; // 下载log的接口，参数请预先传入
  onClose: (status: boolean) => void; // 控制弹框show状态
  getSubTaskLabel?: (id: number) => string; // 超参任务label展示
  getProcessLabel: (id: number) => string; // 进程label展示
  showRefresh?: boolean; // 刷新按钮展示
  showDownLoad?: boolean; // 下载按钮展示
  width?: number;
  title: string;
  downLoadText: string;
  confirmText: string;
  logEmptyMsg: string;
};

let logPageConfig = {
  page_size: 20,
  page: 1,
};

const defaultLogPageConfig = {
  page_size: 20,
  page: 1,
};

const Logger: React.FC<LoggerParamsType> = (props) => {
  const {
    show, // 日志弹框展示
    showInit = false, // 弹框打开时控制刷新日志（show 和 id等变化时触发）
    initialLogTabs = [], // 日志
    subTaskIds = [], //超参子任务, null或者空数组表示不是超参搜素
    gpuPodNumber = 1, // 进程数量
    initialActiveKey = 'dataconverter', // 初始激活TAB（当前）
    logApi, // 获取LOG的API接口，path参数请预先传入，组件内只传params参数
    onDownload = () => {}, // 下载log的接口，参数请预先传入
    onClose = () => {}, // 控制弹框show状态
    getSubTaskLabel = (id) => `超参任务${id}`, // 进程label展示
    getProcessLabel = (id) => `进程${id}`, // 进程label展示
    showRefresh = true, // 刷新按钮展示
    showDownLoad = false, // 下载按钮展示
    width = 750,
    title = '日志',
    downLoadText = '下载日志',
    confirmText = '确定',
    logEmptyMsg = '日志为空',
  } = props;

  const [subTaskId, setSubTaskId] = useState(subTaskIds?.[0]);
  const [activeKey, setActiveKey] = useState(initialActiveKey);
  const [activeProcessId, setActiveProcessId] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isReverse, setIsReverse] = useState(true);
  const [logTabs, setLogTabs] = useState(initialLogTabs);

  const scrollNodeRefs = useRef(logTabs.map(() => React.createRef<HTMLDivElement>()));

  useEffect(() => {
    if (showInit) {
      showLog();
    }
  }, [showInit]);

  const loggerRefresh = async () => {
    setHasMore(true);
    setLogTabs((logTabs: logTab[]) => logTabs.map((tab) => ({ ...tab, logs: [] })));
    setIsReverse(true);
    fetchLogs({ pageConfig: defaultLogPageConfig });
  };

  const onQuickSkipTop = () => {
    setIsReverse(false);
    setLogTabs((logTabs: logTab[]) => logTabs.map((tab) => ({ ...tab, logs: [] })));
    logPageConfig = {
      ...defaultLogPageConfig,
      page: 1,
    };
    fetchLogs({ pageConfig: logPageConfig, reverse: false });
  };

  const onQuickSkipBottom = async () => {
    setIsReverse(true);
    setLogTabs((logTabs: logTab[]) => logTabs.map((tab) => ({ ...tab, logs: [] })));
    fetchLogs({ pageConfig: defaultLogPageConfig });
  };

  const loggerLoadMore = () => {
    if (loading) {
      return;
    }
    const newConfig = {
      ...logPageConfig,
      page: isReverse ? logPageConfig.page - 1 : logPageConfig.page + 1,
    };
    logPageConfig = newConfig;
    fetchLogs({ pageConfig: newConfig, isLoadMore: true, reverse: isReverse });
  };

  const setLogSubTaskId = async (id: number) => {
    setHasMore(true);
    setSubTaskId(id);
    setActiveKey(initialActiveKey);
    setActiveProcessId(0);
    setLogTabs((logTabs: logTab[]) => logTabs.map((tab) => ({ ...tab, logs: [] })));
    setIsReverse(true);
    fetchLogs({ pageConfig: defaultLogPageConfig, taskId: id, job: initialActiveKey, process: 0 });
  };

  const setLogActiveTab = async (tabKey: string) => {
    setHasMore(true);
    setActiveKey(tabKey);
    setActiveProcessId(0);
    setLogTabs((logTabs: logTab[]) => logTabs.map((tab) => ({ ...tab, logs: [] })));
    setIsReverse(true);
    fetchLogs({ pageConfig: defaultLogPageConfig, job: tabKey, process: 0 });
  };

  const setLogProgressId = async (id: number) => {
    setHasMore(true);
    setActiveProcessId(id);
    setLogTabs((logTabs: logTab[]) => logTabs.map((tab) => ({ ...tab, logs: [] })));
    setIsReverse(true);
    fetchLogs({ pageConfig: defaultLogPageConfig, process: id });
  };

  const showLog = async () => {
    updateLogTabs();
    setSubTaskId(subTaskIds?.[0]);
    setActiveKey(initialActiveKey);
    setActiveProcessId(0);
    setHasMore(true);
    fetchLogs({
      pageConfig: defaultLogPageConfig,
      taskId: subTaskIds?.[0],
      job: initialActiveKey,
      process: 0,
    });
  };

  /** 初始化清空日志内容 */
  const updateLogTabs = () => {
    const processList = [];
    for (let i = 0; i < gpuPodNumber; i++) {
      processList.push({ label: getProcessLabel(i), value: i });
    }
    logTabs.forEach((tab: logTab) => {
      if (tab.key === initialActiveKey) {
        tab.title = tab.activeTitle;
      } else {
        tab.title = tab.defaultTitle;
      }
    });
    const newLogTabs = logTabs.slice(0);
    newLogTabs[0].logs = [];
    newLogTabs[1].logs = [];
    newLogTabs[1].processList = processList;
    setLogTabs(newLogTabs);
  };

  const fetchLogs = async ({
    pageConfig = {} as any,
    isLoadMore = false,
    reverse = true,
    taskId = subTaskId,
    job = activeKey,
    process = activeProcessId,
  }) => {
    setLoading(true);
    let list = [];
    let total = 0;
    if (!isLoadMore && reverse) {
      // 反向初次加载，需要获取总页数，需要额外查询倒数第二页（防止条数过少）
      const maxPageIndex = await calcMaxPageIndex({ taskId, job, process }).catch(() => 0);
      if (maxPageIndex !== 0) {
        const res = await logApi({
          ...pageConfig,
          page: maxPageIndex,
          sub_task_id: taskId,
          task_job_name: job,
          process_id: process,
        }).then((res) => {
          logPageConfig.page = maxPageIndex;
          return res;
        });
        const appendList = await logApi({
          ...pageConfig,
          page: maxPageIndex - 1,
          sub_task_id: taskId,
          task_job_name: job,
          process_id: process,
        }).then((res) => {
          logPageConfig.page = maxPageIndex - 1;
          return res.list;
        });
        list = appendList.concat(res.list);
        total = res.total;
      }
    } else {
      const res = await logApi({
        ...pageConfig,
        page: pageConfig.page,
        sub_task_id: taskId,
        task_job_name: job,
        process_id: process,
      });
      list = res.list;
      total = res.total;
    }

    const tabIndex = logTabs.findIndex((tab) => tab.key === job);
    const tab = logTabs[tabIndex];
    const newLogs = isLoadMore ? (reverse ? list.concat(tab.logs) : tab.logs.concat(list)) : list;
    const newTabs = logTabs.slice();
    newTabs[tabIndex] = {
      ...tab,
      logs: newLogs,
    };
    setLogTabs(newTabs);
    setLoading(false);
    setHasMore(newLogs.length < total && list.length > 0); // 这里多加一个条件，list无数据结束掉更多请求

    // 反向初次加载，滚动条滑到底部
    if (!isLoadMore && reverse) {
      const ele = scrollNodeRefs.current[tabIndex].current as HTMLDivElement;
      ele && (ele.scrollTop = ele.scrollHeight);
    }
  };

  const calcMaxPageIndex = async ({
    taskId = subTaskId,
    job = activeKey,
    process = activeProcessId,
  }) => {
    const { total } = await logApi({
      page_size: 1,
      page: 1,
      sub_task_id: taskId,
      task_job_name: job,
      process_id: process,
    });
    const pageSize = logPageConfig.page_size;
    let maxPageIndex = Math.floor(total / pageSize) + 1;
    if (total === 0) maxPageIndex = 0; // 小优化
    return maxPageIndex;
  };

  return (
    <>
      <Modal
        title={
          <>
            {title}
            {subTaskIds?.length && (
              <Select value={subTaskId} onChange={setLogSubTaskId}>
                {subTaskIds.map((taskId) => (
                  <Option value={taskId} key={taskId}>
                    {getSubTaskLabel(taskId)}
                  </Option>
                ))}
              </Select>
            )}
          </>
        }
        centered
        visible={show}
        width={width}
        wrapClassName="logger-modal-comp"
        closeIcon={<i className="iconfont iconguanbi11" />}
        onCancel={() => onClose(false)}
        footer={
          <>
            {showDownLoad && <Button onClick={onDownload}>{downLoadText}</Button>}
            <Button type="primary" onClick={() => onClose(false)}>
              {confirmText}
            </Button>
          </>
        }
      >
        <Tabs activeKey={activeKey} onChange={setLogActiveTab}>
          {logTabs.map((logItem, index) => (
            <TabPane tab={logItem.title} key={logItem.key}>
              <div className="operate-area">
                <Select value={activeProcessId} style={{ width: 146 }} onChange={setLogProgressId}>
                  {logItem.processList.map((item) => (
                    <Option value={item.value} key={item.value}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
                <div className="right-top-btns">
                  <Button
                    className="quick-skip"
                    onClick={onQuickSkipTop}
                    icon={<i className="iconfont iconquicktop" />}
                  />
                  <Button
                    className="quick-skip"
                    onClick={onQuickSkipBottom}
                    icon={<i className="iconfont iconquickbuttom" />}
                  />
                  {showRefresh && (
                    <Button
                      className="refresh-row"
                      onClick={loggerRefresh}
                      icon={<i className="iconfont iconshuaxin2" />}
                    />
                  )}
                </div>
              </div>
              <div className="log-area scroll-small" ref={scrollNodeRefs.current[index]}>
                <InfiniteScroll
                  initialLoad={false}
                  isReverse={isReverse}
                  pageStart={0}
                  loadMore={loggerLoadMore}
                  hasMore={hasMore && !loading}
                  useWindow={false}
                  threshold={300}
                >
                  {loading && isReverse && (
                    <div className="loading-container">
                      <Spin />
                    </div>
                  )}
                  <List
                    dataSource={logItem.logs}
                    locale={{ emptyText: hasMore || loading ? '' : logEmptyMsg }}
                    renderItem={(item, index) => (
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
                  >
                    {loading && !isReverse && (
                      <div className="loading-container">
                        <Spin />
                      </div>
                    )}
                  </List>
                </InfiniteScroll>
              </div>
            </TabPane>
          ))}
        </Tabs>
      </Modal>
    </>
  );
};

export default Logger;
