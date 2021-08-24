import React from 'react';
import { Button } from 'antd';
import { Card } from '../../../index';

export default () => {
  return (
    <>
      <Card
        titleText="Card 实例"
        subTitleText="副标题"
        className="conten-resource-profile"
        style={{
          width: 300,
          margin: '36px auto',
        }}
      >
        <div slot="headRight">
          <Button>编辑</Button>
        </div>
        <div slot="content">
          <h4>Card 内容</h4>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </div>
      </Card>
    </>
  );
};