import React, { useState } from 'react';
import { Button, Space } from 'antd';
import HeightMotion from '../HeightMotion';

export default () => {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState<any[]>([]);

  const add = () => {
    setList([...list, null]);
  };

  const reduce = () => {
    if (list.length > 0) {
      setList(list.slice(0, -1));
    }
  };

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(!visible)}>
        Click me
      </Button>
      <div style={{ marginTop: 20 }}>
        <HeightMotion visible={visible}>
          <Space size={15}>
            <Button size="mini" onClick={() => add()}>
              添加行
            </Button>
            <Button size="mini" onClick={() => reduce()}>
              减少行
            </Button>
          </Space>
          <div
            style={{ width: 400, height: 200, backgroundColor: 'rgb(82 198 107)', marginTop: 15 }}
          ></div>
          {list.map((_, index) => (
            <div
              key={index}
              style={{ width: 400, height: 100, backgroundColor: 'rgb(176 211 183)', marginTop: 5 }}
            ></div>
          ))}
        </HeightMotion>
      </div>
    </div>
  );
};
