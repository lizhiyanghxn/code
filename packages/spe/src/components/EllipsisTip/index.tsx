import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Tooltip } from 'antd';
import cs from 'classnames';
import { useThrottleFn } from 'ahooks';

import type { TooltipProps } from 'antd/lib/tooltip';

export type EllipsisTipType = {
  isParentEllipsis?: boolean; // 展示的内容
} & TooltipProps;

/** 默认是子节点设置了ellipsis样式，此时必须保证children为单一节点 设置isParentEllipsis时，表示父节点设置了ellipsis样式（适合Table组件column设置了ellipsis） */
const EllipsisTip: React.FC<EllipsisTipType> = (props) => {
  const { isParentEllipsis = false, placement, title, children, color = '#fff', ...rest } = props;

  const [showTooltip, setShowTooltip] = useState(false);

  const contentRef = useRef<any>(null);

  const ellipsisRef = useRef<any>(null);

  let containerResizeObserver: any = null;

  const calcShow = () => {
    if (
      ellipsisRef.current.offsetWidth < ellipsisRef.current.scrollWidth ||
      ellipsisRef.current.offsetHeight < ellipsisRef.current.scrollHeight
    ) {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  };

  const { run: resizeTable } = useThrottleFn(calcShow, { wait: 300 });

  const childElement = useMemo(() => {
    if (!children) {
      return <span ref={contentRef}>{title}</span>;
    }
    if (isParentEllipsis) {
      return <span ref={contentRef}>{children}</span>;
    }
    const child: any = React.Children.only(children);
    return React.cloneElement(child, { ref: contentRef });
  }, [children, title, isParentEllipsis]);

  useEffect(() => {
    if (contentRef.current) {
      if (isParentEllipsis) {
        ellipsisRef.current = contentRef.current.parentElement;
      } else {
        ellipsisRef.current = contentRef.current;
      }

      calcShow();
      // @ts-ignore
      containerResizeObserver = new ResizeObserver(resizeTable);
      containerResizeObserver.observe(ellipsisRef.current);
    }

    return () => {
      containerResizeObserver.unobserve(ellipsisRef.current);
    };
  }, [childElement]);

  return showTooltip ? (
    <Tooltip
      {...rest}
      placement={placement}
      title={title}
      color={color}
      overlayClassName={cs(['custom-tooltip', rest.overlayClassName])}
    >
      {childElement}
    </Tooltip>
  ) : (
    childElement
  );
};

export default EllipsisTip;
