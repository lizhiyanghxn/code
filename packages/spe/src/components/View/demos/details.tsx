import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { DetailView } from '../../../index';

export default () => {
  const history = useHistory();

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

  const routersList = [
    { title: '模型管理', click: () => history.replace('/modelList') },
    {
      title: '模型详情',
      click: () => {
        console.log('click item 2');
      },
    },
  ];

  const headerRightEle = <Button>操作按钮</Button>;

  const rightCustomize = <div>rightCustomize here</div>;

  return (
    <DetailView
      style={{
        height: 500,
      }}
      attrData={attrData}
      routersList={routersList}
      headerRightEle={headerRightEle}
      rightCustomize={rightCustomize}
    />
  );
};
