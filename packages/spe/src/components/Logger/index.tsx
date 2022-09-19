import React, { useEffect, useState, useRef } from 'react';
import { Modal, List, Spin, Button, Tabs, Select } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import cs from 'classnames';

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
  gpuPodNumber?: number; // 进程数量
  logs: LogType[];
};

export type LoggerParamsType = {
  show: boolean;
  showInit: boolean | string; // 弹框打开时控制刷新日志（show 和 id等变化时触发）
  isPageMode: boolean;
  initialLogTabs: logTab[]; // 日志
  subTaskIds?: number[]; // 超参子任务数量, null或者空数组表示不是超参搜素
  initialActiveKey: string; // 初始激活TAB（当前）
  logApi: (params: any, extraConfig?: any) => Promise<any>; // 获取LOG的API接口，path参数请预先传入
  onDownload: () => void; // 下载log的接口，参数请预先传入
  onClose: (status: boolean) => void; // 控制弹框show状态
  getSubTaskLabel?: (id: number) => string; // 超参任务label展示
  getProcessLabel?: (id: number) => string; // 进程label展示
  showRefresh?: boolean; // 刷新按钮展示
  showDownLoad?: boolean; // 下载按钮展示
  showProcessSelect?: boolean; // 进程下拉选择展示
  width?: number;
  title: string;
  downLoadText: string;
  confirmText: string;
  logEmptyMsg: string;
  className?: string;
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
    isPageMode = false, // 页面模式，为true时show参数无效
    initialLogTabs = [], // 日志
    subTaskIds = [], // 超参子任务, null或者空数组表示不是超参搜素
    initialActiveKey = 'dataconverter', // 初始激活TAB（当前）
    logApi, // 获取LOG的API接口，path参数请预先传入
    onDownload = () => {}, // 下载log的接口，参数请预先传入
    onClose = () => {}, // 控制弹框show状态
    getSubTaskLabel = (id) => `超参任务${id}`, // 进程label展示
    getProcessLabel = (id) => `进程${id}`, // 进程label展示
    showRefresh = true, // 刷新按钮展示
    showDownLoad = false, // 下载按钮展示
    showProcessSelect = true, // 进程下拉选择展示
    width = 750,
    title = '日志',
    downLoadText = '下载日志',
    confirmText = '确定',
    logEmptyMsg = '日志为空',
    className = '',
  } = props;

  const [subTaskId, setSubTaskId] = useState(subTaskIds?.[0]);
  const [activeKey, setActiveKey] = useState(initialActiveKey);
  const [activeProcessId, setActiveProcessId] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isReverse, setIsReverse] = useState(true);
  const [logTabs, setLogTabs] = useState(initialLogTabs);

  const axiosCanceler = useRef<any>(null);

  const scrollNodeRefs = useRef(initialLogTabs.map(() => React.createRef<HTMLDivElement>()));

  const calcMaxPageIndex = async ({
    taskId = subTaskId,
    job = activeKey,
    process = activeProcessId,
  }) => {
    const { total } = await logApi(
      {
        page_size: 1,
        page: 1,
        sub_task_id: taskId,
        task_job_name: job,
        process_id: process,
      },
      {
        showErr: false,
        onCancel: (c: any) => {
          axiosCanceler.current = c;
        },
      },
    );
    const pageSize = logPageConfig.page_size;
    let maxPageIndex = Math.floor(total / pageSize) + 1;
    if (total === 0) maxPageIndex = 0; // 小优化
    return maxPageIndex;
  };

  const fetchLogs = async (
    {
      pageConfig = {} as any,
      isLoadMore = false,
      reverse = true,
      taskId = subTaskId as any,
      job = activeKey,
      process = activeProcessId,
    },
    _logTabs = logTabs,
  ) => {
    setLoading(true);
    if (axiosCanceler.current) axiosCanceler.current();
    let list = [];
    let total = 0;
    try {
      if (!isLoadMore && reverse) {
        // 反向初次加载，需要获取总页数，需要额外查询倒数第二页（防止条数过少）
        const maxPageIndex = await calcMaxPageIndex({ taskId, job, process });
        if (maxPageIndex !== 0) {
          const res = await logApi(
            {
              ...pageConfig,
              page: maxPageIndex,
              sub_task_id: taskId,
              task_job_name: job,
              process_id: process,
            },
            {
              showErr: false,
              onCancel: (c: any) => {
                axiosCanceler.current = c;
              },
            },
          ).then((result) => {
            logPageConfig.page = maxPageIndex;
            return result;
          });
          const appendList = await logApi(
            {
              ...pageConfig,
              page: maxPageIndex - 1,
              sub_task_id: taskId,
              task_job_name: job,
              process_id: process,
            },
            {
              showErr: false,
              onCancel: (c: any) => {
                axiosCanceler.current = c;
              },
            },
          ).then((result) => {
            logPageConfig.page = maxPageIndex - 1;
            return result.list;
          });
          list = appendList.concat(res.list);
          total = res.total;
        }
      } else {
        const res = await logApi(
          {
            ...pageConfig,
            sub_task_id: taskId,
            task_job_name: job,
            process_id: process,
          },
          {
            showErr: false,
            onCancel: (c: any) => {
              axiosCanceler.current = c;
            },
          },
        );
        list = res.list;
        total = res.total;
      }
    } catch (err: any) {
      if (err.status) {
        console.log('fetchLogs error:', err);
      }
    }

    const tabIndex = _logTabs.findIndex((tab) => tab.key === job);
    const tab = _logTabs[tabIndex];
    // eslint-disable-next-line no-nested-ternary
    const newLogs = isLoadMore ? (reverse ? list.concat(tab.logs) : tab.logs.concat(list)) : list;
    const newTabs = _logTabs.slice();
    newTabs[tabIndex] = {
      ...tab,
      logs: newLogs,
    };
    setLogTabs(newTabs);
    setLoading(false);
    setHasMore(newLogs.length < total && list.length > 0); // 这里多加一个条件，list无数据结束掉更多请求

    // 反向初次加载，滚动条滑到底部
    if (!isLoadMore && reverse) {
      const ele = scrollNodeRefs.current[tabIndex]?.current as HTMLDivElement;
      if (ele) ele.scrollTop = ele.scrollHeight;
    }
  };

  /** 初始化清空日志内容 */
  const updateLogTabs = (_logTabs: logTab[]) => {
    const newLogTabs = _logTabs.map((logTab) => {
      return {
        ...logTab,
        logs: [],
        processList: new Array(logTab.gpuPodNumber || 1).map((_, i) => ({
          label: getProcessLabel(i),
          value: i,
        })),
        title: logTab.key === initialActiveKey ? logTab.activeTitle : logTab.defaultTitle,
      };
    });
    return newLogTabs;
  };

  useEffect(() => {
    if (show || isPageMode) {
      const newLogTabs = updateLogTabs(initialLogTabs);
      setLogTabs(newLogTabs);
      scrollNodeRefs.current = newLogTabs.map(() => React.createRef<HTMLDivElement>());
      setSubTaskId(subTaskIds?.[0]);
      setActiveKey(initialActiveKey);
      setActiveProcessId(0);
      setHasMore(true);
      fetchLogs(
        {
          pageConfig: defaultLogPageConfig,
          taskId: subTaskIds?.[0] || '',
          job: initialActiveKey,
          process: 0,
        },
        newLogTabs,
      );
    }
  }, [showInit]);

  const loggerRefresh = async () => {
    setHasMore(true);
    setLogTabs((tabs: logTab[]) => tabs.map((tab) => ({ ...tab, logs: [] })));
    setIsReverse(true);
    fetchLogs({ pageConfig: defaultLogPageConfig });
  };

  const onQuickSkipTop = () => {
    setIsReverse(false);
    setLogTabs((tabs: logTab[]) => tabs.map((tab) => ({ ...tab, logs: [] })));
    logPageConfig = {
      ...defaultLogPageConfig,
      page: 1,
    };
    fetchLogs({ pageConfig: logPageConfig, reverse: false });
  };

  const onQuickSkipBottom = async () => {
    setIsReverse(true);
    setLogTabs((tabs: logTab[]) => tabs.map((tab) => ({ ...tab, logs: [] })));
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
    setLogTabs((tabs: logTab[]) => tabs.map((tab) => ({ ...tab, logs: [] })));
    setIsReverse(true);
    fetchLogs({ pageConfig: defaultLogPageConfig, taskId: id, job: initialActiveKey, process: 0 });
  };

  const setLogActiveTab = async (tabKey: string) => {
    setHasMore(true);
    setActiveKey(tabKey);
    setActiveProcessId(0);
    setLogTabs((tabs: logTab[]) => tabs.map((tab) => ({ ...tab, logs: [] })));
    setIsReverse(true);
    fetchLogs({ pageConfig: defaultLogPageConfig, job: tabKey, process: 0 });
  };

  const setLogProgressId = async (id: number) => {
    setHasMore(true);
    setActiveProcessId(id);
    setLogTabs((tabs: logTab[]) => tabs.map((tab) => ({ ...tab, logs: [] })));
    setIsReverse(true);
    fetchLogs({ pageConfig: defaultLogPageConfig, process: id });
  };

  const mainContent = (
    <Tabs activeKey={activeKey} onChange={setLogActiveTab}>
      {logTabs.map((logItem, index) => (
        <TabPane tab={logItem.title} key={logItem.key}>
          <div className="operate-area">
            <div className="left-top-action">
              {showProcessSelect && (
                <Select value={activeProcessId} style={{ width: 146 }} onChange={setLogProgressId}>
                  {logItem.processList.map((item) => (
                    <Option value={item.value} key={item.value}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              )}
              {isPageMode && showDownLoad && (
                <Button type="link" onClick={onDownload}>
                  {downLoadText}
                </Button>
              )}
            </div>
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
          <div
            className={cs({ 'log-area': true, 'scroll-small': !isPageMode })}
            ref={scrollNodeRefs.current[index]}
          >
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
                renderItem={(item, i) => (
                  <List.Item key={i}>
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
  );

  return isPageMode ? (
    <div className={cs(['logger-page-comp', className])}>{mainContent}</div>
  ) : (
    <Modal
      title={
        <>
          <span className="title">{title}</span>
          {subTaskIds?.length ? (
            <Select value={subTaskId} onChange={setLogSubTaskId}>
              {subTaskIds.map((taskId) => (
                <Option value={taskId} key={taskId}>
                  {getSubTaskLabel(taskId)}
                </Option>
              ))}
            </Select>
          ) : (
            ''
          )}
        </>
      }
      visible={show}
      width={width}
      wrapClassName={cs(['logger-modal-comp', className])}
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
      {mainContent}
    </Modal>
  );
};

export default Logger;
