import React from 'react';
import { Card } from '../../../index';

export default () => {
  return (
    <>
      <Card
        titleText="主标题"
        subTitleText="副标题"
        className="conten-resource-profile"
        style={{
          width: 300,
          margin: '36px auto',
        }}
      >
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
