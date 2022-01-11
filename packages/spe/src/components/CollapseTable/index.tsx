/* eslint-disable */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import type { HTMLAttributes } from 'react';
import { Table, Collapse } from 'antd';
import cs from 'classnames';
import { notEmpty } from '../../utils';

const { Panel } = Collapse;

const nope = () => {};
const nopeNode = () => <></>;

// 折叠面板需要的数据 dataSource
export type CollapseTablePropsType = HTMLAttributes & {
  onChangeCollapse?: (i: number) => void;
  subPageApi?: () => void; // 子表格的获取数据的api
  subPageParams?: () => any[]; // 子表格api调用时参数的处理，返回一个数组
  subPageSize?: number; // 子表格一页条数
  updateTable?: any; // 父组件回调
  giveFarDataSource?: (item: any, subPagingLength: any) => void; // 给父组件传递DataSource

  columns?: any[];
  dataSource?: any[];
  rowSelection?: any;
  collapseHeader?: (item: any) => React.ReactElement; // 折叠面板自定义标题div
  rightExtra?: (item: any) => React.ReactElement; // 折叠面板右上角自定义div
  expandIconPosition?: string; // 是否需要展开箭头
  flag?: boolean;
  tableDataSource?: any[];
  panelClick?: (item: any) => void;
  collapseLeftTitleClassName?: string;
  pagination?: object;
  rowKey?: any;
  tableParameter?: object;
};

const CollapseTable: React.FC<CollapseTablePropsType> = (props) => {
  const {
    onChangeCollapse = nope, //----
    subPageApi = nope, //----
    subPageParams = () => [], // ----
    subPageSize = 5, // ----
    updateTable = nope, // ----
    giveFarDataSource = nope, // ----

    dataSource = [],
    rightExtra = nopeNode,
    columns = [],
    collapseHeader = nopeNode,
    rowSelection = null,
    expandIconPosition = 'left',
    className = '',
    flag = false,
    tableDataSource = [],
    panelClick = nope,
    collapseLeftTitleClassName = '',
    pagination = {},
    rowKey = 'id',
    tableParameter = {},
  } = props;

  const [subPaging, setSubPaging] = useState([]);
  const [subList, setSubList] = useState([]);
  const [activeKey, setActiveKey] = useState([]);

  // 这里获取的是dataSource的下标
  const onChange = (index: number) => {
    onChangeCollapse(index);
    setActiveKey([index]);
    if (notEmpty(index) && subList[index].length === 0) {
      callApi(dataSource[index], index, 1);
    }
    // 每次展开时都给父组件传递值（第一次展开，通过callApi给父组件传递data），为了table选择框
    if (notEmpty(index) && subList[index].length !== 0) {
      giveFarDataSource(subList[index], subPaging[index]?.total);
    }
  };

  const subTableOnChange = (item: any, index: any, current: number) => {
    callApi(item, index, current);
  };
  /**
   * 子 List 数据请求
   *
   * @param {any} item 父级行对象
   * @param {any} index 当前操作行的下标
   * @param {any} current 当前页码
   */
  const callApi = async (item: any, index: number, current: number) => {
    try {
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

        updateTable && updateTable(dataSource, index, current, res.list, setActiveKey);

        subListNew[index] = res.list;
        giveFarDataSource(res.list, res.total); // 第一展开传递值
        setSubPaging(subPagingNew);
        setSubList(subListNew);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 折叠面板的header
  const header = (item) => (
    <div
      className="collapseHeader"
      onClick={() => {
        panelClick(item);
      }}
    >
      <div className={`collapseLeftTitle ${collapseLeftTitleClassName}`}>
        {collapseHeader(item)}
      </div>
      <div className="rightExta">{rightExtra(item)}</div>
    </div>
  );

  useEffect(() => {
    const index = activeKey[0];
    if (activeKey && notEmpty(index)) {
      callApi(dataSource[index], index, 1);
      // 每次展开时都给父组件传递值（第一次展开，通过callApi给父组件传递data），为了table选择框
      if (subList[index].length !== 0) {
        giveFarDataSource(subList[index], subPaging[index]?.total);
      }
    } else {
      setActiveKey([]);
      if (dataSource.length > 0) {
        const len = dataSource.length;
        setSubPaging(
          new Array(len).fill({
            total: 0,
            current: 1,
          }),
        );
        setSubList(new Array(len).fill([]));
      }
    }
  }, [dataSource]);

  let collapseParams = {};
  if (flag) {
    collapseParams = {
      onChange: (index) => onChange(index),
      activeKey: activeKey,
    };
  }
  const handleTableDataSource = (index) => {
    if (flag) {
      return subList[index];
    }
    return tableDataSource;
  };
  const tablePagination = (index) => {
    if (flag) {
      return {
        size: 'small',
        pageSize: subPageSize,
        onChange: (num) => subTableOnChange(item, index, num),
        total: subPaging[index]?.total || 0,
        current: subPaging[index]?.current || 0,
        showSizeChanger: false,
      };
    }
    return pagination;
  };

  return (
    <>
      {dataSource.length > 0 ? (
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
          >
            {dataSource.map((item: any, index: string | number) => (
              <Panel
                header={header(item)} // 折叠面板的自定义头部div
                key={index}
                className="site-collapse-custom-panel"
              >
                <Table
                  className="collapse-small-table"
                  columns={columns}
                  dataSource={handleTableDataSource(index)}
                  pagination={tablePagination(index)}
                  rowKey={rowKey}
                  {...tableParameter}
                />
              </Panel>
            ))}
          </Collapse>
        </div>
      ) : (
        <Table
          className="common-table-custom"
          columns={columns}
          dataSource={[]}
          pagination={false}
          rowKey="id"
        />
      )}
    </>
  );
};

export default CollapseTable;
