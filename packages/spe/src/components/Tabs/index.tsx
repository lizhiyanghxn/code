// @ts-nocheck
import React, { useRef, useState, useEffect, useMemo } from 'react';
import type { HTMLAttributes } from 'react';
import cs from 'classnames';
import './index.scss';

export type TabsPropsType = HTMLAttributes<HTMLDivElement> & {
  defaultActive?: number; // 当前选中项
  tabsConfig?: string[]; // tabs配置 ['页签一', '页签二'], index 为 value
  onTabChange?: (index: number) => void; // 选中改变事件，将 currentIndex 回传
};

const Tabs: React.FC<TabsPropsType> = (props) => {
  const { defaultActive = 1, tabsConfig, onTabChange = () => {}, ...rest } = props;

  const [currentIndex, setCurrentIndex] = useState(1);

  const tabsRef = useRef(null);
  const [lineStyle, setLineStyle] = useState({
    left: 0,
    width: 0,
  });

  const setSelect = (key: number) => {
    setCurrentIndex(key);
    setTimeout(() => {
      document.getElementsByClassName('common-tabs-li')[key].click();
    }, 50);
  };

  useEffect(() => {
    if (tabsConfig.length > 0) {
      setSelect(defaultActive - 1);
    }
  }, []);

  const tabClick = (e, index: number) => {
    const ctRectObj = tabsRef.current.getBoundingClientRect();
    const liRectObj = e.currentTarget.getBoundingClientRect();
    setLineStyle({
      left: liRectObj.x - ctRectObj.x,
      width: liRectObj.width,
    });
    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
    onTabChange(index);
  };

  const getTabs = useMemo(() => {
    return tabsConfig.map((label: string, index: number) => (
      <li
        className={cs('common-tabs-li', { active: currentIndex === index })}
        key={label}
        onClick={(e) => tabClick(e, index)}
      >
        {label}
      </li>
    ));
  }, [tabsConfig, currentIndex]);

  return (
    <div className="common-tabs" ref={tabsRef} {...rest}>
      <div className="bottom-line" style={lineStyle} />
      <ul className="common-tabs-ul">{getTabs}</ul>
    </div>
  );
};

export default Tabs;
