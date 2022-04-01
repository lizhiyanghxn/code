/**
 * 带‘----’的，表示这些参数是训练列表和模型训练的训练模型需要的参数，这两个页面的Panel展开后需要请求，
 * 后期遇到展开后需要请求的可以继续使用带‘----’的参数或者通过onclick参数在父组件中处理逻辑，如果展开不需要请求或者使用onclick参数，则不需要关注该组件内部的逻辑， 只需要关注传参即可
 */
import React, { useEffect, useState } from 'react';
import { Table, Collapse, Spin } from 'antd';
import cs from 'classnames';
import { notEmpty } from '../../utils';

import type { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import type { ExpandIconPosition } from 'antd/lib/collapse/Collapse';

const { Panel } = Collapse;

let oldlist = '';

export type CollapseTablePropsType = {
  onChangeCollapse?: (index: number) => void; // ----
  onCollapseOpen?: (index: number) => void; // 打开折叠面板回调 ----
  subPageSize?: number; // 子表格一页条数 ----
  subPageApi?: (...p: any[]) => Promise<any>; // ---- 子表格的获取数据的api  ----
  subPageParams?: (...p: any[]) => any[]; // 子表格api调用时参数的处理，返回一个数组 ----
  updateTable?: (...p: any[]) => void; // 更新父表格 ----
  giveFarDataSource?: (...p: any[]) => void; // 给父组件传递DataSource ----

  modelList?: any[]; // 折叠面板需要的数据
  collapseHeader: (item: any, index: number) => React.ReactNode; // 折叠面板自定义标题div
  rightExtra?: (item: any) => React.ReactNode; // 折叠面板右上角自定义div
  columns: ColumnsType<any>; // 列，表头
  rowSelection?: any; // 可选框
  expandIconPosition?: ExpandIconPosition; // 是否需要展开箭头
  className?: string;
  rowKey?: string; // 出现莫名其妙的key值问题可以通过rowKey来自定义解决key问题
  collapseLeftTitleClassName?: string;
  panelClick?: (item: any) => void; // 点击展开的事件，为了展开后的事件，例如：通过该点击事件给父组件传递参数，解决不知道是不是第一次展开，Panel展开后columns不同问题等
  dataSource?: any[]; // 数据
  pagination: TablePaginationConfig; // 分页
  flag?: boolean; // 判断展开时是否需要请求
  showArrow?: boolean; // 是否展示向下箭头
  doNotReset?: boolean; // 是否重置展开的key
};

const CollapseTable: React.FC<CollapseTablePropsType> = (props) => {
  const {
    onChangeCollapse = () => {}, // ----
    onCollapseOpen = () => {}, // ----
    subPageApi = () => {}, //----
    subPageParams = () => [], //----
    subPageSize = 5, //----
    updateTable = () => {}, //----
    giveFarDataSource = () => {}, // ----

    modelList = [],
    rightExtra = () => '',
    columns,
    collapseHeader,
    rowSelection,
    expandIconPosition = 'left',
    className = '',
    flag = false,
    dataSource = [],
    panelClick = () => {},
    collapseLeftTitleClassName = '',
    pagination = {},
    rowKey = 'id',
    showArrow = true,
    doNotReset = false,
  } = props;

  const [activeKey, setActiveKey] = useState<any[]>([]);
  // 如果展开不需要请求或者使用onclick参数，则不需要关注以下组件内部的逻辑
  const [subPaging, setSubPaging] = useState<any[]>([]);
  const [subList, setSubList] = useState<any[]>([]);
  const [subLoading, setSubLoading] = useState(false);

  let collapseParams = {};

  const collapseChange = (index: any) => {
    if (index) {
      setActiveKey([Number(index)]);
      onCollapseOpen(Number(index));
    } else {
      setActiveKey([]);
    }
  };

  const collapseClick = (item: any) => {
    panelClick(item);
  };

  /**
   * 子 List 数据请求
   *
   * @param {any} item 父级行对象
   * @param {any} index 当前操作行的下标
   * @param {any} current 当前页码
   */
  const callApi = async (item: any, index: any, current: number) => {
    try {
      setSubLoading(true);
      const res = await subPageApi(
        ...subPageParams(item, subPaging[index]),
        {
          page_size: subPageSize,
          page: current,
        },
        item,
      );

      if (res && res.list) {
        const subPagingNew = [...subPaging];
        const subListNew = [...subList];
        subPagingNew[index] = {
          total: res.total,
          current,
        };

        updateTable(modelList, index, current, res.list, setActiveKey);

        subListNew[index] = res.list.map((iitem: any) => ({
          ...iitem,
          rowTotal: res.total,
        }));
        giveFarDataSource(res.list, res.total); // 第一展开传递值
        setSubPaging(subPagingNew);
        setSubList(subListNew);
      }
      setSubLoading(false);
    } catch (e) {
      setSubLoading(false);
      console.log(e);
    }
  };

  // 这里获取的是modelList的下标
  const onChange = (index: any) => {
    onChangeCollapse(index);
    setActiveKey([index]);
    if (notEmpty(index) && subList[index].length === 0) {
      callApi(modelList[index], index, 1);
    }
    // 每次展开时都给父组件传递值（第一次展开，通过callApi给父组件传递data），为了table选择框
    if (notEmpty(index) && subList[index].length !== 0) {
      giveFarDataSource(subList[index], subPaging[index]?.total);
    }
  };

  if (!flag) {
    collapseParams = {
      onChange: (index: any) => collapseChange(index),
    };
  }

  if (flag) {
    collapseParams = {
      onChange: (index: any) => onChange(index),
    };
  }

  useEffect(() => {
    if (!doNotReset) {
      setActiveKey([]);
    }
    if (flag) {
      oldlist = JSON.stringify(modelList);
    }
  }, [modelList]);

  const subTableOnChange = (item: any, index: any, current: number) => {
    callApi(item, index, current);
  };

  // 折叠面板的header
  const header = (item: any, index: any) => (
    <div className="collapseHeader" onClick={() => collapseClick(item)}>
      <div className={`collapseLeftTitle ${collapseLeftTitleClassName}`}>
        {collapseHeader(item, index)}
      </div>
      <div className="rightExta">{rightExtra(item)}</div>
    </div>
  );

  useEffect(() => {
    const index = activeKey[0];
    if (flag) {
      if (activeKey && notEmpty(index) && oldlist !== JSON.stringify(modelList)) {
        callApi(modelList[index], index, 1);
        // 每次展开时都给父组件传递值（第一次展开，通过callApi给父组件传递data），为了table选择框
        if (subList[index].length !== 0) {
          giveFarDataSource(subList[index], subPaging[index]?.total);
        }
      } else {
        setActiveKey([]);
        if (modelList.length > 0) {
          const len = modelList.length;
          setSubPaging(
            new Array(len).fill({
              total: 0,
              current: 1,
            }),
          );
          setSubList(new Array(len).fill([]));
        }
      }
    }
  }, [modelList]);

  const tableDataSource = (index: any) => {
    if (flag) {
      return subList[index];
    }
    return dataSource;
  };

  const tablePagination = (index: number, item: any): any => {
    if (flag) {
      return {
        size: 'small',
        pageSize: subPageSize,
        onChange: (num: any) => subTableOnChange(item, index, num),
        total: subPaging[index]?.total || 0,
        current: subPaging[index]?.current || 0,
        showSizeChanger: false,
      };
    }
    return pagination;
  };

  return (
    <>
      {modelList.length > 0 ? (
        <div className={`collapse-table-comp ${className}`}>
          <Collapse
            bordered={false}
            accordion // 手风琴模式
            className={cs(
              { 'site-collapse-custom-collapse': !rowSelection },
              'custom-collapse-table',
            )}
            {...collapseParams}
            expandIconPosition={expandIconPosition}
            activeKey={activeKey}
          >
            {modelList.map((item, index) => (
              <Panel
                header={header(item, index)} // 折叠面板的自定义头部div
                key={index}
                className="site-collapse-custom-panel"
                showArrow={showArrow}
              >
                {item.childJSX ? (
                  item.childJSX(item, index)
                ) : (
                  <Spin spinning={subLoading}>
                    <Table
                      className="collapse-small-table"
                      columns={columns}
                      rowSelection={rowSelection}
                      dataSource={tableDataSource(index)}
                      pagination={tablePagination(index, item)}
                      rowKey={rowKey}
                      scroll={{ x: 1216 }}
                    />
                  </Spin>
                )}
              </Panel>
            ))}
          </Collapse>
        </div>
      ) : (
        <Table
          className="common-table-custom common-table-custom-null"
          columns={columns}
          showHeader={false}
          dataSource={[]}
          pagination={false}
          rowKey="id"
        />
      )}
    </>
  );
};

export default CollapseTable;
