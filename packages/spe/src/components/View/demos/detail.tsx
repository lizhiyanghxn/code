import React from 'react';
import { Button } from 'antd';
import { DetailView } from '../index';

import './pageBox.scss';

export default () => {
  const attrData = [
    {
      title: '模型简介',
      values: [
        { attr: '模型简介', value: '固特异' },
        { attr: '版本', value: 'v1.0' },
        {
          attr: (
            <>
              Accuracy <i className="iconfont iconrizhiguanli"></i>
            </>
          ),
          value: 'v1.0',
        },
      ],
    },
    {
      title: '训练配置',
      values: [
        { attr: '数据集', value: '大尺寸mb' },
        { attr: '算法配置', value: '小模型' },
        { attr: '停止规则', value: '按迭代轮次停止' },
      ],
    },
  ];

  const headerRightEle = <Button>操作按钮</Button>;

  const rightCustomize = <div>rightCustomize here</div>;

  return (
    <DetailView
      routers={[{ title: 'Title1' }, { title: 'Title2' }]}
      headerRightElement={headerRightEle}
      leftAttrData={attrData}
      rightPart={rightCustomize}
    />
  );
};
