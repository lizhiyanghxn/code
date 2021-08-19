import React, { Fragment, useMemo } from 'react';
import type { HTMLAttributes } from 'react';
import cs from 'classnames';
import './index.scss';

interface IRouterListItem {
  title: string;
  click?: () => void;
}

export type BreadcrumbPropsType = HTMLAttributes<HTMLDivElement> & {
  routersList?: IRouterListItem[];
};

const isFunctionEmpty = (func: any): boolean => {
  if (typeof func !== 'function') {
    return true;
  }
  const matchItems = func.toString().replace(/\s+/g, '').match(/{.*}/g) || [];

  // () => history.replace('/modelList') 为 false
  // () => () 为 false
  if (matchItems.length === 0) {
    return false;
  }
  return matchItems[0] === '{}';
};

const Breadcrumb: React.FC<BreadcrumbPropsType> = (props) => {
  const { routersList = [], ...rest } = props;

  const arrow = <i className="iconfont iconfangxiangyou" />;

  const getList = useMemo(() => {
    return (
      <span className="b-title-item">
        {routersList.map((item: IRouterListItem, i: number) => {
          const { title, click } = item;
          const notEndIndex = i < routersList.length - 1;

          const routerProps: HTMLAttributes<HTMLDivElement> = {};

          const routerClickAble = !isFunctionEmpty(click);

          if (routerClickAble) {
            routerProps.onClick = click;
          }

          return (
            <Fragment key={i}>
              <span
                className={cs('b-title-item', { 'hover-cursor': notEndIndex && routerClickAble })}
                {...routerProps}
              >
                {title}
              </span>
              {notEndIndex && arrow}
            </Fragment>
          );
        })}
      </span>
    );
  }, [routersList]);

  return (
    <div className="breadcrumb-list-comp" {...rest}>
      {getList}
    </div>
  );
};

export default Breadcrumb;
