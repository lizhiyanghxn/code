import React, { Fragment, useMemo } from 'react';
import type { CSSProperties } from 'react';
import cs from 'classnames';
import { useHistory } from 'react-router-dom';
import './index.scss';

const isFalsy = (value: any) => (value === 0 || value === '0' ? false : !value);

const isArray = (data: any) => Object.prototype.toString.call(data) === '[object Array]';
const isObject = (data: any) => Object.prototype.toString.call(data) === '[object Object]';

export type BreadcrumbPropsType = {
  style?: CSSProperties;
  titleConfig?: any;
  titleAutoTrigger?: boolean;
};

const Breadcrumb: React.FC<BreadcrumbPropsType> = (props) => {
  const { titleConfig = [], titleAutoTrigger = false, ...rest } = props;

  const history = useHistory();

  const arrow = <i className="iconfont iconfangxiangyou" />;

  const getList = useMemo(() => {
    if (isFalsy(titleConfig)) {
      return [];
    }
    if (isArray(titleConfig)) {
      return titleConfig.map((item: any, i: number) => {
        let obj = {};
        const notEndIndex = i < titleConfig.length - 1;
        if (notEndIndex && titleAutoTrigger) {
          obj = {
            onClick: () => {
              history.go(-1);
            },
          };
        }
        return (
          <Fragment key={i}>
            <span
              className={cs('b-title-item', { 'hover-cursor': notEndIndex && titleAutoTrigger })}
              {...obj}
            >
              {item}
            </span>
            {notEndIndex && arrow}
          </Fragment>
        );
      });
    }
    if (isObject(titleConfig)) {
      return titleConfig.routers.map((item: any, i: number) => {
        let obj = {};
        const notEndIndex = i < titleConfig.routers.length - 1;
        if (notEndIndex && titleAutoTrigger) {
          obj = {
            onClick: () => {
              if (!isFalsy(item.backType)) {
                if (item.backType === 'back') {
                  history.go(-1);
                } else {
                  history[item.backType](item.path);
                }
              }
              if (titleAutoTrigger && titleConfig.onClick) {
                titleConfig.onClick(item, i);
              }
            },
          };
        }
        return (
          <Fragment key={i}>
            <span
              className={cs('b-title-item', { 'hover-cursor': notEndIndex && titleAutoTrigger })}
              {...obj}
            >
              {item.name}
            </span>
            {notEndIndex && arrow}
          </Fragment>
        );
      });
    }
    return <span className="b-title-item">{titleConfig}</span>;
  }, [titleConfig]);

  return (
    <div className="breadcrumb-list-comp" {...rest}>
      {getList}
    </div>
  );
};

Breadcrumb.defaultProps = {
  /**
   * 标题配置 string / array / obj obj: {routers: [{name: '', path: '', backType: 'replace / push /
   * back'}], onClick: (i) => {}}
   */
  titleConfig: '',
  titleAutoTrigger: false, // 点击时自动触发
};

export default Breadcrumb;
