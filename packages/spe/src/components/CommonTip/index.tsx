import React from 'react';
import cs from 'classnames';
import { Tooltip } from 'antd';

import type { TooltipPlacement } from 'antd/lib/tooltip';

export type CommonTipType = {
  text?: React.ReactNode; // 展示的内容
  placement?: TooltipPlacement; // 展示的位置
  type?: '1' | '2' | '3'; // 展示的icon类型，1：问号  2：感叹号 3：更多
  fontSize?: number; // icon的字体大小
  style?: any;
};

const CommonTip: React.FC<CommonTipType> = (props) => {
  const { text = '', placement = 'top', type = '1', fontSize = 14, style = {}, children } = props;

  return (
    <Tooltip
      placement={placement}
      title={text}
      color="rgb(255,255,255)"
      overlayClassName="custom-tooltip"
    >
      {children || (
        <i
          className={cs('common-tip', 'iconfont', {
            iconwenhao: type === '1',
            iconi: type === '2',
            iconmore_information: type === '3',
          })}
          style={{ fontSize, ...style }}
        />
      )}
    </Tooltip>
  );
};

export default CommonTip;
