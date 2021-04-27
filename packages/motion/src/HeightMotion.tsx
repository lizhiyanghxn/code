import React from 'react';
import type { HeightMotionType } from './type';
import CSSMotion, { CSSMotionProps } from 'rc-motion';
import './HeightMotion.less';
import { heightMotion } from './utils/config';

export default function HeightMotion(props: HeightMotionType) {
  const { visible = false, children, motionConfig = {} } = props;

  const prefixCls = heightMotion.motionName;

  const openMotion: CSSMotionProps = {
    ...heightMotion,
    motionAppear: false,
    leavedClassName: `${prefixCls}-content-hidden`,
    ...motionConfig,
  };

  return (
    <CSSMotion visible={visible} {...openMotion}>
      {({ className: motionClassName, style: motionStyle }, ref) => {
        return (
          <div ref={ref} className={motionClassName} style={motionStyle}>
            {children}
          </div>
        );
      }}
    </CSSMotion>
  );
}
