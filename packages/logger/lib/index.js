import React from 'react';
import { Modal, List, Spin, Button } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import './TrainingLogModal.less';
export default function Logger(props) {
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
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Modal,
      {
        title: title,
        centered: true,
        visible: show,
        width: width,
        closeIcon: React.createElement('i', { className: 'iconfont iconguanbi11' }),
        onCancel: onClose,
        footer: null,
      },
      showRefresh &&
        React.createElement(
          'div',
          { className: 'refresh-row', onClick: onRefresh },
          React.createElement('i', { className: 'iconfont iconzhongzhi1' }),
        ),
      React.createElement(
        'div',
        { className: 'log-area scroll-small' },
        React.createElement(
          InfiniteScroll,
          {
            initialLoad: false,
            pageStart: 0,
            loadMore: onLoadMore,
            hasMore: !showLoading && hasMore,
            useWindow: false,
          },
          React.createElement(List, {
            dataSource: logs,
            locale: { emptyText: emptyMsg },
            renderItem: (item, index) =>
              React.createElement(
                List.Item,
                { key: index },
                React.createElement(
                  'div',
                  { className: 'log' },
                  React.createElement('div', { className: 'log-time' }, item.date),
                  React.createElement('div', {
                    className: 'log-content',
                    dangerouslySetInnerHTML: { __html: item.message },
                  }),
                ),
              ),
          }),
        ),
        showLoading &&
          hasMore &&
          React.createElement(
            'div',
            { className: 'loading-container' },
            React.createElement(Spin, null),
          ),
      ),
      showDownLoad &&
        React.createElement(
          'div',
          { className: 'bottom-area' },
          React.createElement(
            Button,
            { type: 'link', size: 'small', className: 'btn-link-custom', onClick: onDownload },
            '\u4E0B\u8F7D\u65E5\u5FD7',
          ),
        ),
    ),
  );
}
