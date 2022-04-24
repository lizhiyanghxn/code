import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useThrottleFn } from 'ahooks';
import { ConfigProvider, Table } from 'antd';
import { notEmpty } from '../../utils';
import useInheritGetPopupContainer from '../../utils/useInheritGetPopupContainer';

import type { TableProps } from 'antd/lib/table';

export type ResizeTableType = {
  usage?: 'page' | 'modal';
  visible?: boolean;
  dataSource: any[];
  children?: any;
} & TableProps<any>;

/** Visible是对tabs场景下，被隐藏的table再突然显示时，表格高度初始化失败的情况 visible 表格是否被显示，隐藏状态下设置数据为空数组，这样显示时才会刷新高度 */
const ResizeTable: React.FC<ResizeTableType> = (props) => {
  const {
    usage = 'page',
    columns = [],
    children,
    visible = true,
    dataSource = [],
    ...rest
  } = props;

  const tableRef = useRef(null);
  const inheritGetPopupContainer = useInheritGetPopupContainer();

  const [data, setData] = useState<any[]>([]);
  // 表格的高度是否为0, 防止切换时闪一下
  const [tableHeight, setTableHeight] = useState(true);

  const [shouldUpdateFlag, setUpdateFlag] = useState(0);
  let containerResizeObserver: any = null;

  const { current: $parentContainer }: any = tableRef || {};

  const { run: resizeTable } = useThrottleFn(
    () => {
      setUpdateFlag(shouldUpdateFlag + 1);
    },
    { wait: 300 },
  );

  useMemo(() => {
    if (!visible && tableHeight) {
      setData([]);
    } else {
      setTimeout(() => setData(dataSource), 50);
    }
  }, [visible, dataSource, tableHeight]);

  useEffect(() => {
    if ($parentContainer) {
      // @ts-ignore
      containerResizeObserver = new ResizeObserver(resizeTable);
      containerResizeObserver.observe($parentContainer);
    }
    return () => {
      if ($parentContainer && containerResizeObserver) {
        containerResizeObserver.unobserve($parentContainer);
      }
    };
  }, [$parentContainer, visible]);

  const scroll = useMemo(() => {
    if ($parentContainer) {
      const { width, height } = $parentContainer.getBoundingClientRect();
      const tableTheadHeight =
        $parentContainer.getElementsByClassName('ant-table-thead')[0]?.offsetHeight || 0;
      setTableHeight(height === 0);
      const getTabelWidth = () => {
        // 页容器中 x 轴 1216 算法为 1440 - 200(菜单) - 24(边距)
        if (usage === 'page') {
          return 1216;
        }
        if (usage === 'modal') {
          return width - 32;
        }
        return width;
      };
      return {
        x: getTabelWidth(),
        y: height - tableTheadHeight,
      };
    }
    return {};
  }, [$parentContainer, shouldUpdateFlag]);

  const tableProps: any = useMemo(() => ({ ...rest, dataSource: data }), [data, rest]);

  if (notEmpty(scroll)) {
    tableProps.scroll = scroll;
  }

  const getTable = () => {
    if (columns.length > 0) {
      tableProps.columns = columns.map((column, i) => {
        if (i === 0) {
          return {
            ...column,
            fixed: 'left',
          };
        }
        if (i === columns.length - 1) {
          return {
            ...column,
            fixed: 'right',
          };
        }
        return column;
      });
      return <Table {...tableProps} />;
    }

    if (children) {
      return (
        <Table {...tableProps}>
          {React.Children.map(children, (column: any, i) => {
            if (i === 0) {
              return React.cloneElement(column, { fixed: 'left' });
            }
            if (i === children.length - 1) {
              return React.cloneElement(column, { fixed: 'right' });
            }
            return React.cloneElement(column);
          })}
        </Table>
      );
    }

    return null;
  };

  return (
    <ConfigProvider
      getPopupContainer={(node) =>
        // 保证有一定的空间展示popup
        (dataSource.length > 5 && node && node.closest('.ant-table-body')) ||
        inheritGetPopupContainer(node)
      }
    >
      {/* 这个div不能省还是加上吧 */}
      <div className="resize-table-comp" ref={tableRef} style={{ width: '100%', height: '100%' }}>
        {getTable()}
      </div>
    </ConfigProvider>
  );
};

export default ResizeTable;
