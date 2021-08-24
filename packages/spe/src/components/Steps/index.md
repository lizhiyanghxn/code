---
title: SPE - 步骤条组件
group:
  path: /
nav:
  title: 组件
  path: /components
---

# Steps 步骤条

Steps 封装了 SPE 的步骤条

## 代码演示

```javascript
import React, { useState } from 'react';
import { Button, Switch, Modal } from 'antd';
import { Steps } from '../../../index';

export default () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isCenter, setIsCenter] = useState(false);

  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <>
      <div>
        <Button
          type="primary"
          onClick={showModal}
          style={{
            position: 'absolute',
            top: '50%',
            right: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          查看效果
        </Button>
      </div>
      <Modal title="Basic Modal" visible={modalVisible} onOk={closeModal} onCancel={closeModal}>
        <Steps
          currentStep={2}
          stepsConfig={['第一步', '第二步', '第三步']}
          usage="modal"
          isCenter={isCenter}
        />
        切换是否居中: <Switch onChange={() => setIsCenter(!isCenter)} />
      </Modal>
    </>
  );
};
```

### 弹框中步骤条

<code src="./demos/modal.tsx" iframe="500px" />

## 代码演示

```javascript
import React, { useState } from 'react';
import { Switch } from 'antd';
import { Steps } from '../../../index';

export default () => {
  const [isCenter, setIsCenter] = useState(false);
  return (
    <>
      <Steps
        currentStep={2}
        stepsConfig={['第一步', '第二步', '第三步']}
        usage="page"
        isCenter={isCenter}
      />
      <div
        style={{
          margin: '24px',
          textAlign: 'center',
        }}
      >
        切换是否居中: <Switch onChange={() => setIsCenter(!isCenter)} />
      </div>
    </>
  );
};
```

### 页面中步骤条

<code src="./demos/page.tsx" iframe="200px"/>

## API

View

| 参数        | 说明                                    | 类型     | 默认值  |
| ----------- | --------------------------------------- | -------- | ------- |
| currentStep | 当前步骤                                | number   | 1       |
| stepsConfig | 步骤条配置                              | string[] | []      |
| usage       | 步骤条使用场景，取值'modal' 或者 'page' | string   | 'modal' |
| isCenter    | 步骤条是否居中                          | boolean  | false   |
