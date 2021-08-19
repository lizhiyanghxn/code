/* eslint-disable */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import type { HTMLAttributes } from 'react';
import { Table, Collapse } from 'antd';
import cs from 'classnames';
import { notEmpty } from '../../utils';
import './index.scss';

const { Panel } = Collapse;

const nope = () => {};
const nopeNode = () => <></>;

// 折叠面板需要的数据 dataSource
export type CollapseTablePropsType = HTMLAttributes & {
  columns?: any[];
  dataSource?: any[];
  rowSelection?: any;
  collapseHeader?: (item: any) => React.ReactElement; // 折叠面板自定义标题div
  rightExtra?: (item: any) => React.ReactElement; // 折叠面板右上角自定义div
  classNameHeader?: string; // 折叠面板头部标题最外层div的类名
  classNameExta?: string; // 折叠面板右上角最外层div的类名
  onChangeCollapse?: (i: number) => void;
  identification?: string; // 标识是训练还是模型
  subPageSize?: number; // 子表格一页条数
  subPageApi?: () => void; // 子表格的获取数据的api
  subPageParams?: () => any[]; // 子表格api调用时参数的处理，返回一个数组
  updateTable?: any; // 父组件回调
  giveFarDataSource?: (item: any, subPagingLength: any) => void; // 给父组件传递DataSource
  expandIconPosition?: string; // 是否需要展开箭头
};

const CollapseTable: React.FC<CollapseTablePropsType> = (props) => {
  const {
    columns = [],
    dataSource = [],
    rightExtra = nopeNode,
    collapseHeader = nopeNode,
    rowSelection = null,
    classNameHeader = 'collapseHeader',
    classNameExta = 'rightExta',
    onChangeCollapse = nope,
    subPageApi = nope,
    subPageParams = () => [],
    subPageSize = 5,
    updateTable = nope,
    giveFarDataSource = nope,
    expandIconPosition = 'left',
    className = '',
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
  const header = (item: any) => <div className={classNameHeader}>{collapseHeader(item)}</div>;
  // 折叠面板最右上角div
  const extra = (item: any) => <div className={classNameExta}>{rightExtra(item)}</div>;

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
            onChange={onChange}
            activeKey={activeKey}
            expandIconPosition={expandIconPosition}
          >
            {dataSource.map((item: any, index: string | number) => (
              <Panel
                header={header(item)} // 折叠面板的自定义头部div
                key={index}
                className="site-collapse-custom-panel"
                extra={extra(item)} // 折叠面板右上角自定义div
              >
                <Table
                  className="collapse-small-table"
                  columns={columns}
                  dataSource={subList[index]}
                  pagination={{
                    size: 'small',
                    pageSize: subPageSize,
                    onChange: (num) => subTableOnChange(item, index, num),
                    total: subPaging[index]?.total || 0,
                    current: subPaging[index]?.current || 0,
                    showSizeChanger: false,
                  }}
                  rowKey="id"
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
